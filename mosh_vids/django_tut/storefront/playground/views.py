from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.  # request handler



# a view function : - takes a request and returns response 
#                   - it is request handler
#                   - examples of requests: #pull data from DB, # transform data, # send e-mail 

def say_hello(request):
   return render(request, 'hello.html', {'name':'Beck', 'age':28})
