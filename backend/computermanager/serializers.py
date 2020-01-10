from rest_framework import serializers
from computermanager.models import Vendor, Shop, Computer


class VendorOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ['id', 'name', 'headquarter']


class ShopOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = '__all__'


class ComputerListSerializer(serializers.ModelSerializer):
    vendor = serializers.SerializerMethodField()

    class Meta:
        model = Computer
        fields = ['id', 'model', 'description', 'vendor', 'isEnterpriseModel', 'storage', 'sold_at']

    def get_vendor(self, obj):
        return obj.vendor.name if obj.vendor else ''


class ComputerFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = '__all__'
