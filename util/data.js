const countries = [ 
    {"name": "Afghanistan", "code": "AF"}, 
    {"name": "land Islands", "code": "AX"}, 
    {"name": "Albania", "code": "AL"}, 
    {"name": "Algeria", "code": "DZ"}, 
    {"name": "American Samoa", "code": "AS"}, 
    {"name": "AndorrA", "code": "AD"}, 
    {"name": "Angola", "code": "AO"}, 
    {"name": "Anguilla", "code": "AI"}, 
    {"name": "Antarctica", "code": "AQ"}, 
    {"name": "Antigua and Barbuda", "code": "AG"}, 
    {"name": "Argentina", "code": "AR"}, 
    {"name": "Armenia", "code": "AM"}, 
    {"name": "Aruba", "code": "AW"}, 
    {"name": "Australia", "code": "AU"}, 
    {"name": "Austria", "code": "AT"}, 
    {"name": "Azerbaijan", "code": "AZ"}, 
    {"name": "Bahamas", "code": "BS"}, 
    {"name": "Bahrain", "code": "BH"}, 
    {"name": "Bangladesh", "code": "BD"}, 
    {"name": "Barbados", "code": "BB"}, 
    {"name": "Belarus", "code": "BY"}, 
    {"name": "Belgium", "code": "BE"}, 
    {"name": "Belize", "code": "BZ"}, 
    {"name": "Benin", "code": "BJ"}, 
    {"name": "Bermuda", "code": "BM"}, 
    {"name": "Bhutan", "code": "BT"}, 
    {"name": "Bolivia", "code": "BO"}, 
    {"name": "Bosnia and Herzegovina", "code": "BA"}, 
    {"name": "Botswana", "code": "BW"}, 
    {"name": "Bouvet Island", "code": "BV"}, 
    {"name": "Brazil", "code": "BR"}, 
    {"name": "British Indian Ocean Territory", "code": "IO"}, 
    {"name": "Brunei Darussalam", "code": "BN"}, 
    {"name": "Bulgaria", "code": "BG"}, 
    {"name": "Burkina Faso", "code": "BF"}, 
    {"name": "Burundi", "code": "BI"}, 
    {"name": "Cambodia", "code": "KH"}, 
    {"name": "Cameroon", "code": "CM"}, 
    {"name": "Canada", "code": "CA"}, 
    {"name": "Cape Verde", "code": "CV"}, 
    {"name": "Cayman Islands", "code": "KY"}, 
    {"name": "Central African Republic", "code": "CF"}, 
    {"name": "Chad", "code": "TD"}, 
    {"name": "Chile", "code": "CL"}, 
    {"name": "China", "code": "CN"}, 
    {"name": "Christmas Island", "code": "CX"}, 
    {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
    {"name": "Colombia", "code": "CO"}, 
    {"name": "Comoros", "code": "KM"}, 
    {"name": "Congo", "code": "CG"}, 
    {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
    {"name": "Cook Islands", "code": "CK"}, 
    {"name": "Costa Rica", "code": "CR"}, 
    {"name": "Cote D'Ivoire", "code": "CI"}, 
    {"name": "Croatia", "code": "HR"}, 
    {"name": "Cuba", "code": "CU"}, 
    {"name": "Cyprus", "code": "CY"}, 
    {"name": "Czech Republic", "code": "CZ"}, 
    {"name": "Denmark", "code": "DK"}, 
    {"name": "Djibouti", "code": "DJ"}, 
    {"name": "Dominica", "code": "DM"}, 
    {"name": "Dominican Republic", "code": "DO"}, 
    {"name": "Ecuador", "code": "EC"}, 
    {"name": "Egypt", "code": "EG"}, 
    {"name": "El Salvador", "code": "SV"}, 
    {"name": "Equatorial Guinea", "code": "GQ"}, 
    {"name": "Eritrea", "code": "ER"}, 
    {"name": "Estonia", "code": "EE"}, 
    {"name": "Ethiopia", "code": "ET"}, 
    {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
    {"name": "Faroe Islands", "code": "FO"}, 
    {"name": "Fiji", "code": "FJ"}, 
    {"name": "Finland", "code": "FI"}, 
    {"name": "France", "code": "FR"}, 
    {"name": "French Guiana", "code": "GF"}, 
    {"name": "French Polynesia", "code": "PF"}, 
    {"name": "French Southern Territories", "code": "TF"}, 
    {"name": "Gabon", "code": "GA"}, 
    {"name": "Gambia", "code": "GM"}, 
    {"name": "Georgia", "code": "GE"}, 
    {"name": "Germany", "code": "DE"}, 
    {"name": "Ghana", "code": "GH"}, 
    {"name": "Gibraltar", "code": "GI"}, 
    {"name": "Greece", "code": "GR"}, 
    {"name": "Greenland", "code": "GL"}, 
    {"name": "Grenada", "code": "GD"}, 
    {"name": "Guadeloupe", "code": "GP"}, 
    {"name": "Guam", "code": "GU"}, 
    {"name": "Guatemala", "code": "GT"}, 
    {"name": "Guernsey", "code": "GG"}, 
    {"name": "Guinea", "code": "GN"}, 
    {"name": "Guinea-Bissau", "code": "GW"}, 
    {"name": "Guyana", "code": "GY"}, 
    {"name": "Haiti", "code": "HT"}, 
    {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
    {"name": "Holy See (Vatican City State)", "code": "VA"}, 
    {"name": "Honduras", "code": "HN"}, 
    {"name": "Hong Kong", "code": "HK"}, 
    {"name": "Hungary", "code": "HU"}, 
    {"name": "Iceland", "code": "IS"}, 
    {"name": "India", "code": "IN"}, 
    {"name": "Indonesia", "code": "ID"}, 
    {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
    {"name": "Iraq", "code": "IQ"}, 
    {"name": "Ireland", "code": "IE"}, 
    {"name": "Isle of Man", "code": "IM"}, 
    {"name": "Israel", "code": "IL"}, 
    {"name": "Italy", "code": "IT"}, 
    {"name": "Jamaica", "code": "JM"}, 
    {"name": "Japan", "code": "JP"}, 
    {"name": "Jersey", "code": "JE"}, 
    {"name": "Jordan", "code": "JO"}, 
    {"name": "Kazakhstan", "code": "KZ"}, 
    {"name": "Kenya", "code": "KE"}, 
    {"name": "Kiribati", "code": "KI"}, 
    {"name": "Korea, Democratic People'S Republic of", "code": "KP"}, 
    {"name": "Korea, Republic of", "code": "KR"}, 
    {"name": "Kuwait", "code": "KW"}, 
    {"name": "Kyrgyzstan", "code": "KG"}, 
    {"name": "Lao People'S Democratic Republic", "code": "LA"}, 
    {"name": "Latvia", "code": "LV"}, 
    {"name": "Lebanon", "code": "LB"}, 
    {"name": "Lesotho", "code": "LS"}, 
    {"name": "Liberia", "code": "LR"}, 
    {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
    {"name": "Liechtenstein", "code": "LI"}, 
    {"name": "Lithuania", "code": "LT"}, 
    {"name": "Luxembourg", "code": "LU"}, 
    {"name": "Macao", "code": "MO"}, 
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
    {"name": "Madagascar", "code": "MG"}, 
    {"name": "Malawi", "code": "MW"}, 
    {"name": "Malaysia", "code": "MY"}, 
    {"name": "Maldives", "code": "MV"}, 
    {"name": "Mali", "code": "ML"}, 
    {"name": "Malta", "code": "MT"}, 
    {"name": "Marshall Islands", "code": "MH"}, 
    {"name": "Martinique", "code": "MQ"}, 
    {"name": "Mauritania", "code": "MR"}, 
    {"name": "Mauritius", "code": "MU"}, 
    {"name": "Mayotte", "code": "YT"}, 
    {"name": "Mexico", "code": "MX"}, 
    {"name": "Micronesia, Federated States of", "code": "FM"}, 
    {"name": "Moldova, Republic of", "code": "MD"}, 
    {"name": "Monaco", "code": "MC"}, 
    {"name": "Mongolia", "code": "MN"}, 
    {"name": "Montenegro", "code": "ME"},
    {"name": "Montserrat", "code": "MS"},
    {"name": "Morocco", "code": "MA"}, 
    {"name": "Mozambique", "code": "MZ"}, 
    {"name": "Myanmar", "code": "MM"}, 
    {"name": "Namibia", "code": "NA"}, 
    {"name": "Nauru", "code": "NR"}, 
    {"name": "Nepal", "code": "NP"}, 
    {"name": "Netherlands", "code": "NL"}, 
    {"name": "Netherlands Antilles", "code": "AN"}, 
    {"name": "New Caledonia", "code": "NC"}, 
    {"name": "New Zealand", "code": "NZ"}, 
    {"name": "Nicaragua", "code": "NI"}, 
    {"name": "Niger", "code": "NE"}, 
    {"name": "Nigeria", "code": "NG"}, 
    {"name": "Niue", "code": "NU"}, 
    {"name": "Norfolk Island", "code": "NF"}, 
    {"name": "Northern Mariana Islands", "code": "MP"}, 
    {"name": "Norway", "code": "NO"}, 
    {"name": "Oman", "code": "OM"}, 
    {"name": "Pakistan", "code": "PK"}, 
    {"name": "Palau", "code": "PW"}, 
    {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
    {"name": "Panama", "code": "PA"}, 
    {"name": "Papua New Guinea", "code": "PG"}, 
    {"name": "Paraguay", "code": "PY"}, 
    {"name": "Peru", "code": "PE"}, 
    {"name": "Philippines", "code": "PH"}, 
    {"name": "Pitcairn", "code": "PN"}, 
    {"name": "Poland", "code": "PL"}, 
    {"name": "Portugal", "code": "PT"}, 
    {"name": "Puerto Rico", "code": "PR"}, 
    {"name": "Qatar", "code": "QA"}, 
    {"name": "Reunion", "code": "RE"}, 
    {"name": "Romania", "code": "RO"}, 
    {"name": "Russian Federation", "code": "RU"}, 
    {"name": "RWANDA", "code": "RW"}, 
    {"name": "Saint Helena", "code": "SH"}, 
    {"name": "Saint Kitts and Nevis", "code": "KN"}, 
    {"name": "Saint Lucia", "code": "LC"}, 
    {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
    {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
    {"name": "Samoa", "code": "WS"}, 
    {"name": "San Marino", "code": "SM"}, 
    {"name": "Sao Tome and Principe", "code": "ST"}, 
    {"name": "Saudi Arabia", "code": "SA"}, 
    {"name": "Senegal", "code": "SN"}, 
    {"name": "Serbia", "code": "RS"}, 
    {"name": "Seychelles", "code": "SC"}, 
    {"name": "Sierra Leone", "code": "SL"}, 
    {"name": "Singapore", "code": "SG"}, 
    {"name": "Slovakia", "code": "SK"}, 
    {"name": "Slovenia", "code": "SI"}, 
    {"name": "Solomon Islands", "code": "SB"}, 
    {"name": "Somalia", "code": "SO"}, 
    {"name": "South Africa", "code": "ZA"}, 
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
    {"name": "Spain", "code": "ES"}, 
    {"name": "Sri Lanka", "code": "LK"}, 
    {"name": "Sudan", "code": "SD"}, 
    {"name": "Suriname", "code": "SR"}, 
    {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
    {"name": "Swaziland", "code": "SZ"}, 
    {"name": "Sweden", "code": "SE"}, 
    {"name": "Switzerland", "code": "CH"}, 
    {"name": "Syrian Arab Republic", "code": "SY"}, 
    {"name": "Taiwan, Province of China", "code": "TW"}, 
    {"name": "Tajikistan", "code": "TJ"}, 
    {"name": "Tanzania, United Republic of", "code": "TZ"}, 
    {"name": "Thailand", "code": "TH"}, 
    {"name": "Timor-Leste", "code": "TL"}, 
    {"name": "Togo", "code": "TG"}, 
    {"name": "Tokelau", "code": "TK"}, 
    {"name": "Tonga", "code": "TO"}, 
    {"name": "Trinidad and Tobago", "code": "TT"}, 
    {"name": "Tunisia", "code": "TN"}, 
    {"name": "Turkey", "code": "TR"}, 
    {"name": "Turkmenistan", "code": "TM"}, 
    {"name": "Turks and Caicos Islands", "code": "TC"}, 
    {"name": "Tuvalu", "code": "TV"}, 
    {"name": "Uganda", "code": "UG"}, 
    {"name": "Ukraine", "code": "UA"}, 
    {"name": "United Arab Emirates", "code": "AE"}, 
    {"name": "United Kingdom", "code": "GB"}, 
    {"name": "United States", "code": "US"}, 
    {"name": "United States Minor Outlying Islands", "code": "UM"}, 
    {"name": "Uruguay", "code": "UY"}, 
    {"name": "Uzbekistan", "code": "UZ"}, 
    {"name": "Vanuatu", "code": "VU"}, 
    {"name": "Venezuela", "code": "VE"}, 
    {"name": "Viet Nam", "code": "VN"}, 
    {"name": "Virgin Islands, British", "code": "VG"}, 
    {"name": "Virgin Islands, U.S.", "code": "VI"}, 
    {"name": "Wallis and Futuna", "code": "WF"}, 
    {"name": "Western Sahara", "code": "EH"}, 
    {"name": "Yemen", "code": "YE"}, 
    {"name": "Zambia", "code": "ZM"}, 
    {"name": "Zimbabwe", "code": "ZW"} 
]

const numberCodes = [
      {
        "code": "+212",
        "name": "Morocco"
      },
      {
        "code": "+93",
        "name": "Afghanistan"
      },
      {
        "code": "+355",
        "name": "Albania"
      },
      {
        "code": "+213",
        "name": "Algeria"
      },
      {
        "code": "+1 684",
        "name": "American Samoa"
      },
      {
        "code": "+376",
        "name": "Andorra"
      },
      {
        "code": "+244",
        "name": "Angola"
      },
      {
        "code": "+1 264",
        "name": "Anguilla"
      },
      {
        "code": "+1 268",
        "name": "Antigua and Barbuda"
      },
      {
        "code": "+54",
        "name": "Argentina"
      },
      {
        "code": "+374",
        "name": "Armenia"
      },
      {
        "code": "+297",
        "name": "Aruba"
      },
      {
        "code": "+247",
        "name": "Ascension"
      },
      {
        "code": "+61",
        "name": "Australia"
      },
      {
        "code": "+672",
        "name": "Australian External Territories"
      },
      {
        "code": "+43",
        "name": "Austria"
      },
      {
        "code": "+994",
        "name": "Azerbaijan"
      },
      {
        "code": "+1 242",
        "name": "Bahamas"
      },
      {
        "code": "+973",
        "name": "Bahrain"
      },
      {
        "code": "+880",
        "name": "Bangladesh"
      },
      {
        "code": "+1 246",
        "name": "Barbados"
      },
      {
        "code": "+1 268",
        "name": "Barbuda"
      },
      {
        "code": "+375",
        "name": "Belarus"
      },
      {
        "code": "+32",
        "name": "Belgium"
      },
      {
        "code": "+501",
        "name": "Belize"
      },
      {
        "code": "+229",
        "name": "Benin"
      },
      {
        "code": "+1 441",
        "name": "Bermuda"
      },
      {
        "code": "+975",
        "name": "Bhutan"
      },
      {
        "code": "+591",
        "name": "Bolivia"
      },
      {
        "code": "+387",
        "name": "Bosnia and Herzegovina"
      },
      {
        "code": "+267",
        "name": "Botswana"
      },
      {
        "code": "+55",
        "name": "Brazil"
      },
      {
        "code": "+246",
        "name": "British Indian Ocean Territory"
      },
      {
        "code": "+1 284",
        "name": "British Virgin Islands"
      },
      {
        "code": "+673",
        "name": "Brunei"
      },
      {
        "code": "+359",
        "name": "Bulgaria"
      },
      {
        "code": "+226",
        "name": "Burkina Faso"
      },
      {
        "code": "+257",
        "name": "Burundi"
      },
      {
        "code": "+855",
        "name": "Cambodia"
      },
      {
        "code": "+237",
        "name": "Cameroon"
      },
      {
        "code": "+1",
        "name": "Canada"
      },
      {
        "code": "+238",
        "name": "Cape Verde"
      },
      {
        "code": "+ 345",
        "name": "Cayman Islands"
      },
      {
        "code": "+236",
        "name": "Central African Republic"
      },
      {
        "code": "+235",
        "name": "Chad"
      },
      {
        "code": "+56",
        "name": "Chile"
      },
      {
        "code": "+86",
        "name": "China"
      },
      {
        "code": "+61",
        "name": "Christmas Island"
      },
      {
        "code": "+61",
        "name": "Cocos-Keeling Islands"
      },
      {
        "code": "+57",
        "name": "Colombia"
      },
      {
        "code": "+269",
        "name": "Comoros"
      },
      {
        "code": "+242",
        "name": "Congo"
      },
      {
        "code": "+243",
        "name": "Congo, Dem. Rep. of (Zaire)"
      },
      {
        "code": "+682",
        "name": "Cook Islands"
      },
      {
        "code": "+506",
        "name": "Costa Rica"
      },
      {
        "code": "+385",
        "name": "Croatia"
      },
      {
        "code": "+53",
        "name": "Cuba"
      },
      {
        "code": "+599",
        "name": "Curacao"
      },
      {
        "code": "+537",
        "name": "Cyprus"
      },
      {
        "code": "+420",
        "name": "Czech Republic"
      },
      {
        "code": "+45",
        "name": "Denmark"
      },
      {
        "code": "+246",
        "name": "Diego Garcia"
      },
      {
        "code": "+253",
        "name": "Djibouti"
      },
      {
        "code": "+1 767",
        "name": "Dominica"
      },
      {
        "code": "+1 809",
        "name": "Dominican Republic"
      },
      {
        "code": "+670",
        "name": "East Timor"
      },
      {
        "code": "+56",
        "name": "Easter Island"
      },
      {
        "code": "+593",
        "name": "Ecuador"
      },
      {
        "code": "+20",
        "name": "Egypt"
      },
      {
        "code": "+503",
        "name": "El Salvador"
      },
      {
        "code": "+240",
        "name": "Equatorial Guinea"
      },
      {
        "code": "+291",
        "name": "Eritrea"
      },
      {
        "code": "+372",
        "name": "Estonia"
      },
      {
        "code": "+251",
        "name": "Ethiopia"
      },
      {
        "code": "+500",
        "name": "Falkland Islands"
      },
      {
        "code": "+298",
        "name": "Faroe Islands"
      },
      {
        "code": "+679",
        "name": "Fiji"
      },
      {
        "code": "+358",
        "name": "Finland"
      },
      {
        "code": "+33",
        "name": "France"
      },
      {
        "code": "+596",
        "name": "French Antilles"
      },
      {
        "code": "+594",
        "name": "French Guiana"
      },
      {
        "code": "+689",
        "name": "French Polynesia"
      },
      {
        "code": "+241",
        "name": "Gabon"
      },
      {
        "code": "+220",
        "name": "Gambia"
      },
      {
        "code": "+995",
        "name": "Georgia"
      },
      {
        "code": "+49",
        "name": "Germany"
      },
      {
        "code": "+233",
        "name": "Ghana"
      },
      {
        "code": "+350",
        "name": "Gibraltar"
      },
      {
        "code": "+30",
        "name": "Greece"
      },
      {
        "code": "+299",
        "name": "Greenland"
      },
      {
        "code": "+1 473",
        "name": "Grenada"
      },
      {
        "code": "+590",
        "name": "Guadeloupe"
      },
      {
        "code": "+1 671",
        "name": "Guam"
      },
      {
        "code": "+502",
        "name": "Guatemala"
      },
      {
        "code": "+224",
        "name": "Guinea"
      },
      {
        "code": "+245",
        "name": "Guinea-Bissau"
      },
      {
        "code": "+595",
        "name": "Guyana"
      },
      {
        "code": "+509",
        "name": "Haiti"
      },
      {
        "code": "+504",
        "name": "Honduras"
      },
      {
        "code": "+852",
        "name": "Hong Kong SAR China"
      },
      {
        "code": "+36",
        "name": "Hungary"
      },
      {
        "code": "+354",
        "name": "Iceland"
      },
      {
        "code": "+91",
        "name": "India"
      },
      {
        "code": "+62",
        "name": "Indonesia"
      },
      {
        "code": "+98",
        "name": "Iran"
      },
      {
        "code": "+964",
        "name": "Iraq"
      },
      {
        "code": "+353",
        "name": "Ireland"
      },
      {
        "code": "+972",
        "name": "Israel"
      },
      {
        "code": "+39",
        "name": "Italy"
      },
      {
        "code": "+225",
        "name": "Ivory Coast"
      },
      {
        "code": "+1 876",
        "name": "Jamaica"
      },
      {
        "code": "+81",
        "name": "Japan"
      },
      {
        "code": "+962",
        "name": "Jordan"
      },
      {
        "code": "+7 7",
        "name": "Kazakhstan"
      },
      {
        "code": "+254",
        "name": "Kenya"
      },
      {
        "code": "+686",
        "name": "Kiribati"
      },
      {
        "code": "+965",
        "name": "Kuwait"
      },
      {
        "code": "+996",
        "name": "Kyrgyzstan"
      },
      {
        "code": "+856",
        "name": "Laos"
      },
      {
        "code": "+371",
        "name": "Latvia"
      },
      {
        "code": "+961",
        "name": "Lebanon"
      },
      {
        "code": "+266",
        "name": "Lesotho"
      },
      {
        "code": "+231",
        "name": "Liberia"
      },
      {
        "code": "+218",
        "name": "Libya"
      },
      {
        "code": "+423",
        "name": "Liechtenstein"
      },
      {
        "code": "+370",
        "name": "Lithuania"
      },
      {
        "code": "+352",
        "name": "Luxembourg"
      },
      {
        "code": "+853",
        "name": "Macau SAR China"
      },
      {
        "code": "+389",
        "name": "Macedonia"
      },
      {
        "code": "+261",
        "name": "Madagascar"
      },
      {
        "code": "+265",
        "name": "Malawi"
      },
      {
        "code": "+60",
        "name": "Malaysia"
      },
      {
        "code": "+960",
        "name": "Maldives"
      },
      {
        "code": "+223",
        "name": "Mali"
      },
      {
        "code": "+356",
        "name": "Malta"
      },
      {
        "code": "+692",
        "name": "Marshall Islands"
      },
      {
        "code": "+596",
        "name": "Martinique"
      },
      {
        "code": "+222",
        "name": "Mauritania"
      },
      {
        "code": "+230",
        "name": "Mauritius"
      },
      {
        "code": "+262",
        "name": "Mayotte"
      },
      {
        "code": "+52",
        "name": "Mexico"
      },
      {
        "code": "+691",
        "name": "Micronesia"
      },
      {
        "code": "+1 808",
        "name": "Midway Island"
      },
      {
        "code": "+373",
        "name": "Moldova"
      },
      {
        "code": "+377",
        "name": "Monaco"
      },
      {
        "code": "+976",
        "name": "Mongolia"
      },
      {
        "code": "+382",
        "name": "Montenegro"
      },
      {
        "code": "+1664",
        "name": "Montserrat"
      },
      {
        "code": "+212",
        "name": "Morocco"
      },
      {
        "code": "+95",
        "name": "Myanmar"
      },
      {
        "code": "+264",
        "name": "Namibia"
      },
      {
        "code": "+674",
        "name": "Nauru"
      },
      {
        "code": "+977",
        "name": "Nepal"
      },
      {
        "code": "+31",
        "name": "Netherlands"
      },
      {
        "code": "+599",
        "name": "Netherlands Antilles"
      },
      {
        "code": "+1 869",
        "name": "Nevis"
      },
      {
        "code": "+687",
        "name": "New Caledonia"
      },
      {
        "code": "+64",
        "name": "New Zealand"
      },
      {
        "code": "+505",
        "name": "Nicaragua"
      },
      {
        "code": "+227",
        "name": "Niger"
      },
      {
        "code": "+234",
        "name": "Nigeria"
      },
      {
        "code": "+683",
        "name": "Niue"
      },
      {
        "code": "+672",
        "name": "Norfolk Island"
      },
      {
        "code": "+850",
        "name": "North Korea"
      },
      {
        "code": "+1 670",
        "name": "Northern Mariana Islands"
      },
      {
        "code": "+47",
        "name": "Norway"
      },
      {
        "code": "+968",
        "name": "Oman"
      },
      {
        "code": "+92",
        "name": "Pakistan"
      },
      {
        "code": "+680",
        "name": "Palau"
      },
      {
        "code": "+970",
        "name": "Palestinian Territory"
      },
      {
        "code": "+507",
        "name": "Panama"
      },
      {
        "code": "+675",
        "name": "Papua New Guinea"
      },
      {
        "code": "+595",
        "name": "Paraguay"
      },
      {
        "code": "+51",
        "name": "Peru"
      },
      {
        "code": "+63",
        "name": "Philippines"
      },
      {
        "code": "+48",
        "name": "Poland"
      },
      {
        "code": "+351",
        "name": "Portugal"
      },
      {
        "code": "+1 787",
        "name": "Puerto Rico"
      },
      {
        "code": "+974",
        "name": "Qatar"
      },
      {
        "code": "+262",
        "name": "Reunion"
      },
      {
        "code": "+40",
        "name": "Romania"
      },
      {
        "code": "+7",
        "name": "Russia"
      },
      {
        "code": "+250",
        "name": "Rwanda"
      },
      {
        "code": "+685",
        "name": "Samoa"
      },
      {
        "code": "+378",
        "name": "San Marino"
      },
      {
        "code": "+966",
        "name": "Saudi Arabia"
      },
      {
        "code": "+221",
        "name": "Senegal"
      },
      {
        "code": "+381",
        "name": "Serbia"
      },
      {
        "code": "+248",
        "name": "Seychelles"
      },
      {
        "code": "+232",
        "name": "Sierra Leone"
      },
      {
        "code": "+65",
        "name": "Singapore"
      },
      {
        "code": "+421",
        "name": "Slovakia"
      },
      {
        "code": "+386",
        "name": "Slovenia"
      },
      {
        "code": "+677",
        "name": "Solomon Islands"
      },
      {
        "code": "+27",
        "name": "South Africa"
      },
      {
        "code": "+500",
        "name": "South Georgia and the South Sandwich Islands"
      },
      {
        "code": "+82",
        "name": "South Korea"
      },
      {
        "code": "+34",
        "name": "Spain"
      },
      {
        "code": "+94",
        "name": "Sri Lanka"
      },
      {
        "code": "+249",
        "name": "Sudan"
      },
      {
        "code": "+597",
        "name": "Suriname"
      },
      {
        "code": "+268",
        "name": "Swaziland"
      },
      {
        "code": "+46",
        "name": "Sweden"
      },
      {
        "code": "+41",
        "name": "Switzerland"
      },
      {
        "code": "+963",
        "name": "Syria"
      },
      {
        "code": "+886",
        "name": "Taiwan"
      },
      {
        "code": "+992",
        "name": "Tajikistan"
      },
      {
        "code": "+255",
        "name": "Tanzania"
      },
      {
        "code": "+66",
        "name": "Thailand"
      },
      {
        "code": "+670",
        "name": "Timor Leste"
      },
      {
        "code": "+228",
        "name": "Togo"
      },
      {
        "code": "+690",
        "name": "Tokelau"
      },
      {
        "code": "+676",
        "name": "Tonga"
      },
      {
        "code": "+1 868",
        "name": "Trinidad and Tobago"
      },
      {
        "code": "+216",
        "name": "Tunisia"
      },
      {
        "code": "+90",
        "name": "Turkey"
      },
      {
        "code": "+993",
        "name": "Turkmenistan"
      },
      {
        "code": "+1 649",
        "name": "Turks and Caicos Islands"
      },
      {
        "code": "+688",
        "name": "Tuvalu"
      },
      {
        "code": "+1 340",
        "name": "U.S. Virgin Islands"
      },
      {
        "code": "+256",
        "name": "Uganda"
      },
      {
        "code": "+380",
        "name": "Ukraine"
      },
      {
        "code": "+971",
        "name": "United Arab Emirates"
      },
      {
        "code": "+44",
        "name": "United Kingdom"
      },
      {
        "code": "+1",
        "name": "United States"
      },
      {
        "code": "+598",
        "name": "Uruguay"
      },
      {
        "code": "+998",
        "name": "Uzbekistan"
      },
      {
        "code": "+678",
        "name": "Vanuatu"
      },
      {
        "code": "+58",
        "name": "Venezuela"
      },
      {
        "code": "+84",
        "name": "Vietnam"
      },
      {
        "code": "+1 808",
        "name": "Wake Island"
      },
      {
        "code": "+681",
        "name": "Wallis and Futuna"
      },
      {
        "code": "+967",
        "name": "Yemen"
      },
      {
        "code": "+260",
        "name": "Zambia"
      },
      {
        "code": "+255",
        "name": "Zanzibar"
      },
      {
        "code": "+263",
        "name": "Zimbabwe"
      }
    ]

export { countries, numberCodes }