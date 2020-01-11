from django.contrib.auth.decorators import permission_required
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from computermanager.models import Vendor, Shop, Computer
from computermanager.serializers import VendorOptionSerializer, ShopOptionSerializer, ComputerListSerializer, \
    ComputerFormSerializer

from backend.computermanager.serializers import ShopListSerializer, ShopFormSerializer


@swagger_auto_schema(method='GET', responses={200: VendorOptionSerializer(many=True)})
@api_view(['GET'])
def vendor_option_list(request):
    vendors = Vendor.objects.all()
    serializer = VendorOptionSerializer(vendors, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: ShopOptionSerializer(many=True)})
@api_view(['GET'])
def shop_option_list(request):
    shop = Shop.objects.all()
    serializer = ShopOptionSerializer(shop, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: ComputerListSerializer(many=True)})
@api_view(['GET'])
@permission_required('computermanager.view_computer',raise_exception=True)
def computer_list(request):
    cmp = Computer.objects.all()
    serializer = ComputerListSerializer(cmp, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=ComputerFormSerializer, responses={200: ComputerFormSerializer()})
@api_view(['POST'])
@permission_required('computermanager.add_computer',raise_exception=True)
def computer_form_create(request):
    data = JSONParser().parse(request)
    serializer = ComputerFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ComputerFormSerializer, responses={200: ComputerFormSerializer()})
@api_view(['PUT'])
@permission_required('computermanager.change_computer',raise_exception=True)
def computer_form_update(request, pk):
    try:
        cmp = Computer.objects.get(pk=pk)
    except Computer.DoesNotExist:
        return Response({'error': 'Computer does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = ComputerFormSerializer(cmp, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: ComputerFormSerializer()})
@api_view(['GET'])
@permission_required('computermanager.view_computer',raise_exception=True)
def computer_form_get(request, pk):
    try:
        cmp = Computer.objects.get(pk=pk)
    except Computer.DoesNotExist:
        return Response({'error': 'Computer does not exist.'}, status=404)

    serializer = ComputerFormSerializer(cmp)
    return Response(serializer.data)


@api_view(['DELETE'])
def computer_delete(request, pk):
    try:
        cmp = Computer.objects.get(pk=pk)
    except Computer.DoesNotExist:
        return Response({'error': 'Computer does not exist.'}, status=404)
    cmp.delete()
    return Response(status=204)

#### Shop Views

@swagger_auto_schema(method='GET', responses={200: ShopListSerializer(many=True)})
@api_view(['GET'])
@permission_required('computermanager.view_shop',raise_exception=True)
def shop_list(request):
    shops = Shop.objects.all()
    serializer = ShopListSerializer(shops, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=ShopFormSerializer, responses={200: ShopFormSerializer()})
@api_view(['POST'])
@permission_required('computermanager.add_shop',raise_exception=True)
def shop_form_create(request):
    data = JSONParser().parse(request)
    serializer = ShopFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ShopFormSerializer, responses={200: ShopFormSerializer()})
@api_view(['PUT'])
@permission_required('computermanager.change_shop',raise_exception=True)
def shop_form_update(request, pk):
    try:
        shop = Shop.objects.get(pk=pk)
    except Shop.DoesNotExist:
        return Response({'error': 'Shop does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = ShopFormSerializer(shop, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: ShopFormSerializer()})
@api_view(['GET'])
@permission_required('computermanager.view_shop',raise_exception=True)
def shop_form_get(request, pk):
    try:
        shop = Shop.objects.get(pk=pk)
    except Shop.DoesNotExist:
        return Response({'error': 'Shop does not exist.'}, status=404)

    serializer = ShopFormSerializer(shop)
    return Response(serializer.data)


@api_view(['DELETE'])
def shop_delete(request, pk):
    try:
        shop = Shop.objects.get(pk=pk)
    except Shop.DoesNotExist:
        return Response({'error': 'Shop does not exist.'}, status=404)
    shop.delete()
    return Response(status=204)
