from rest_framework import viewsets
from actages.models import act
from actages.api.serializers import ActSerializer

class ActagesViewSet(viewsets.ModelViewSet):
    queryset = act.objects.all()
    serializer_class = ActSerializer
