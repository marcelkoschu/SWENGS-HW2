from rest_framework import serializers
from computermanager.computers.models import Computer


class ComputerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computer
        fields = ['vendor', 'model', 'build_date', 'storage_capacity_GB', 'isEnterpriseModel', 'price']