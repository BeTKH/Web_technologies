from django.urls import path

from . import views

urlpatterns = [
    path('', views.indexPolls, name='index'),
    path('add', views.add, name="add"),
]