from django.shortcuts import render

# Create your views here.


from django.http import HttpResponse


def indexPolls(request):
    return HttpResponse(" <h2>Hello Django! </h2> <br>You're at the <u>polls index</u>.")