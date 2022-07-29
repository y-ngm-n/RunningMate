import requests
from bs4 import BeautifulSoup


def search(region):
    url='https://map.naver.com/v5/search/'+region+'헬스장'
    response=requests.get(url)
    if response.status_code==200:
        html=response.text
        soup=BeautifulSoup(html,'html.parser',from_encoding='utf-8')
        print(soup)
    else:
        print(response.status_code)

search('우이동')

