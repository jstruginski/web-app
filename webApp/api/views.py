from django.http import HttpResponse
import requests



def index(request):
    response = requests.get('https://restcountries.eu/rest/v2/all')
    return HttpResponse(response)
