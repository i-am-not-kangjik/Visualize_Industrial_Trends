from django.shortcuts import render
from django.views import generic
# Create your views here.

class index(generic.ListView):
    def __init__(self):
        self.title_nm = "메인페이지입니다."
        self.ogImgUrl = ""
        self.descript = "메인페이지입니다."
        self.template_name  = "appDV/Country.html"

    def get(self, request, *args, **kwargs):
        self.content = {"descript":self.descript,
                        "title_nm":self.title_nm,
                        "ogImgUrl":self.ogImgUrl,
                        }

        return render(request, self.template_name, self.content)

class firstIndex(generic.ListView):
    def __init__(self):
        self.title_nm       = "WE ARE QWER "
        self.ogImgUrl       = ""
        self.descript       = ""
        self.template_name  = "appDV/index.html"

    def get(self, request, *args, **kwargs):
        self.content = {"descript":self.descript,
                        "title_nm":self.title_nm,
                        "ogImgUrl":self.ogImgUrl,
                        "dataList":""}

        return render(request, self.template_name, self.content)

