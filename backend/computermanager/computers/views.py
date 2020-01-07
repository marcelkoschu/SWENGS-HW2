from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from computermanager.computers.models import Computer
from computermanager.computers.serializers import ComputerSerializer
from rest_framework.response import Response

# Create your views here.
@api_view(['GET', 'POST'])
def computer_list(request):
    if request.method == 'GET':
        computers = Computer.objects.all()
        serializer = ComputerSerializer(computers, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ComputerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def computer_detail(request, pk):
    try:
        cmp = Computer.objects.get(pk=pk)
    except Computer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ComputerSerializer(cmp)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ComputerSerializer(cmp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        cmp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)