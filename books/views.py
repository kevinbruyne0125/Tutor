from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets, filters
from books.models import Book, Category, SubCategory
from books.serializers import BookSerializer, CategorySerializer, SubCategorySerializer

class HomeTemplateView(TemplateView, ):
    template_name = 'home.html'


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'subcategory__category__name', 'subcategory__name')


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', )


class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('category__name', )