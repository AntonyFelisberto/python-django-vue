from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import include,path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include("products.urls")), #padrao quando se usa http url
    #path('', include("products.urls")),    #padrao quando se usa somente as models
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)