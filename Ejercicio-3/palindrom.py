def enc_palindromos (cadena):
    palindromos = []
    for i in range(0, len(cadena)):
        for j in range(i, len(cadena)):
            nueva_cadena = cadena[i:j+3]
            if nueva_cadena == nueva_cadena[::-1]:
                palindromos.append(nueva_cadena)
    return palindromos

if __name__ == '__main__':
    cadena = 'afoolishconsistencyisthehobgoblinoflittlemindsadoredbylittlestatesmenandphilosophersanddivineswithconsistencyagreatsoulhassimplynothingtodohemayaswellconcernhimselfwithhisshadowonthewallspeakwhatyouthinknowinhardwordsandtomorrowspeakwhattomorrowthinksinhardwordsagainthoughitcontradicteverythingyousaidtodayahsoyoushallbesuretobemisunderstoodisitsobadthentobemisunderstoodpythagoraswasmisunderstoodandsocratesandjesusandlutherandcopernicusandgalileoandnewtonandeverypureandwisespiritthatevertookfleshtobegreatistobemisunderstood'
    palindromos = enc_palindromos(cadena)
    for palindromo in palindromos:
        print(palindromo)