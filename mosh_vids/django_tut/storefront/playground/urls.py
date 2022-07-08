from django.urls import path
from . import views


#URLConf  -- MAP urls to views
#         -- every app will have its own url configurations (mapping of views to urls)  

urlpatterns = [

    path('hello/', views.say_hello)
]
