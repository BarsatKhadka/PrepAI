package com.hackathon.apiWrapper.Service;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class OpenAiService {
    public String generateStudyPlan(String text, String apiKey) throws IOException {
        String apiUrl = "https://api.openai.com/v1/chat/completions";

        JSONObject json = new JSONObject();
        json.put("model", "gpt-3.5-turbo");
        json.put("messages", new JSONArray().put(new JSONObject()
                .put("role", "user")
                .put("content", "Create a study plan based on the following content , very detailed for a exam based on the content." + text)));
        json.put("max_tokens", 1500);

        try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
            HttpPost request = new HttpPost(apiUrl);
            request.setHeader("Authorization", "Bearer " + apiKey);
            request.setHeader("Content-Type", "application/json");
            request.setEntity(new StringEntity(json.toString()));

            try (CloseableHttpResponse response = httpClient.execute(request)) {
                String responseBody = EntityUtils.toString(response.getEntity());
                JSONObject responseJson = new JSONObject(responseBody);
                JSONArray choices = responseJson.optJSONArray("choices");

                if (choices == null || choices.isEmpty()) {
                    throw new JSONException("The response does not contain 'choices'. Full response: " + responseJson);
                }
                if (!responseJson.has("choices")) {
                    throw new JSONException("The response does not contain 'choices'. Full response: " + responseJson);
                }
                if (responseJson.has("error")) {
                    String errorMessage = responseJson.getJSONObject("error").getString("message");
                    throw new RuntimeException("OpenAI API Error: " + errorMessage);
                }

                return responseJson.getJSONArray("choices").getJSONObject(0).getJSONObject("message").getString("content");
            }
        }
    }

}
