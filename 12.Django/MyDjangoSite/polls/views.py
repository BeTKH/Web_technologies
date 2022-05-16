from django.shortcuts import render

# Create your views here.


from django.http import HttpResponse


def indexPolls(request):
    return HttpResponse(" <h1>Hello Django! </h1> <br>You're at the <u>polls index</u>.")