from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.  # request handler



# a view function : - takes a request and returns response 
#                   - it is request handler

def say_hello(request):
    return HttpResponse('Hello World!')
