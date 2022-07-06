from django.shortcuts import render

# Create your views here.


from django.http import HttpResponse


def indexPolls(request):
    return render(request, "home.html", {"name":"now"})


def add(request):

    num1 = float(request.GET["number1"])
    num2 = float(request.GET["number2"])

    rez = num1 * (num2**3)

    return render(request, "result.html", {"sum":rez})






    

    

    