import fitz
import openai
from django.conf import settings
import json

#from setting fetching the api key
openai.api_key = settings.OPENAI_API_KEY

def text_extraction(file):

    text =""
      # PyMuPDF
        # Open the uploaded PDF file
    with fitz.open(stream=file.read(), filetype="pdf") as pdf:
        for page in pdf:
            page_text = page.get_text()
            text += page_text or ""
    return text


def quizzer(file):
    text = text_extraction(file)
    system_prompt = f"Create a quiz with questions and answers based on the following text:\n\n{text}"
    system_prompt += "Organize the following multiple-choice quiz questions, choices, and answers into separate Python lists or dictionaries. The goal is to store each element clearly and efficiently for further use:\n\n1. Use a list named 'questions' where each item is a dictionary containing a 'question' key with the question text , an 'options' key with a dictionary of answer choices (e.g., 'a', 'b', 'c', 'd'). and an 'answer' key with value of particular answer\n2.\n\nHere’s an example format:\n\nquestions = [\n    {\n        'question': 'Question text',\n        'options': {'a': 'Choice A', 'b': 'Choice B', 'c': 'Choice C', 'd': 'Choice D'},\n ''answer' :'correct_answer_choice'  },\n ]\n\nPlease follow this structure when organizing the quiz data."
            
            #gernerating response in json format by messaging the system and also keeping the response_format into JSON
    response = openai.chat.completions.create(
        model ="gpt-4o-mini",
        messages=[{
            'role':'system',
            'content': 'Your response should be JSON format'
        },
        {
            "role": "user",
            "content": system_prompt,
                    
        }],
        response_format={'type':'json_object'}
    )
            #goind deep for the content 
    quiz = response.choices[0].message.content
    #converting the json data into python object/dictionary
    data = json.loads(quiz)
    return data
