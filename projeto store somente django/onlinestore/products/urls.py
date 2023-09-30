from django.urls import path
from .views import (ProductDetailView,ProductListView,manufacturer_list,manufacturer_detail,product_list,product_detail)

urlpatterns = [
    #usando http request
    path("productList/",product_list,name="product-list"),
    path("productDetail/<int:pk>",product_detail,name="product-detail"),
    path("manufacturers/",manufacturer_list,name="manufacturer-list"),
    path("manufacturerDetail/<int:pk>",manufacturer_detail,name="manufacturer-detail"),

    #usando models base
    path("",ProductListView.as_view(),name="product-list"),
    path("products/<int:pk>",ProductDetailView.as_view(),name="product-detail")
]
