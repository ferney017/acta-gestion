from rest_framework.routers import DefaultRouter
from actages.api.views import ActagesViewSet




router = DefaultRouter()
router.register('act', ActagesViewSet, basename='act')


urlpatterns = router.urls
