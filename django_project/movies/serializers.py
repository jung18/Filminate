from rest_framework import serializers
from .models import Movie

class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'title',)


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        exclude = ('id',)
