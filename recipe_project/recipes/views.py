from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

class RecipeList(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeDetail(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeCreate(generics.CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer