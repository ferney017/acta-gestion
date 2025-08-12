from rest_framework import serializers
from actages.models import act


class ActSerializer(serializers.ModelSerializer):
    class Meta:
        model = act
        fields = '__all__'
