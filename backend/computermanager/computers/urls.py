from django.urls import path
from computermanager.computers import views

urlpatterns = [
    path('computers/', views.computer_list),
    path('computers/<int:pk>/', views.computer_detail),
]