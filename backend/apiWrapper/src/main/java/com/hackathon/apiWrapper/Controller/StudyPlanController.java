package com.hackathon.apiWrapper.Controller;


import com.hackathon.apiWrapper.Service.OpenAiService;
import com.hackathon.apiWrapper.Service.PdfService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;

    @RestController
    @RequestMapping("/api/study-plan")
    public class StudyPlanController {

        private final PdfService pdfService;
        private final OpenAiService openAiService;

        @Value("${openai.api.key}")
        private String openAiApiKey;

        public StudyPlanController(PdfService pdfService, OpenAiService openAiService) {
            this.pdfService = pdfService;
            this.openAiService = openAiService;
        }

        @PostMapping("/generate")
        public ResponseEntity<String> generateStudyPlan(@RequestParam("file") MultipartFile file) throws IOException {

            File tempFile = File.createTempFile("uploaded", ".pdf");
            file.transferTo(tempFile);


            String pdfContent = pdfService.extractTextFromPdf(tempFile);


            String studyPlan = openAiService.generateStudyPlan(pdfContent, openAiApiKey);


            tempFile.delete();

            return ResponseEntity.ok(studyPlan);
        }
    }