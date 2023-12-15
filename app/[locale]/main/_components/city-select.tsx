export default function CitySelect({
    label,
    value,
    show,
    onChange,
    required,
    placeholder,
    errorText = '',
    className = ``,
    country,
    paddingHeight,
    paddingWidth
}: {
    country: string
    value: string
    show?: boolean
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
    placeholder?: any
    className?: string
    errorText?: string
    required: boolean
    label?: string
    paddingHeight?: string | number
    paddingWidth?: string | number
}
) {
    const getCityOptions = () => {
        switch (country) {
            case 'Philippines':
                return [
                    { group: 'Abra', cities: ['Bangued', 'Boliney', 'Manabo'] },
                    { group: 'Agusan del Norte', cities: ['Butuan City', 'Cabadbaran City', 'Buenavista'] },
                    { group: 'Agusan del Sur', cities: ['San Francisco', 'Prosperidad', 'Bayugan'] },
                    { group: 'Aklan', cities: ['Kalibo', 'Banga', 'Batan'] },
                    { group: 'Albay', cities: ['Legazpi City', 'Tabaco City', 'Ligao City'] },
                    { group: 'Antique', cities: ['San Jose de Buenavista', 'Sibalom', 'Pandan'] },
                    { group: 'Apayao', cities: ['Kabugao', 'Conner', 'Calanasan'] },
                    { group: 'Aurora', cities: ['Baler', 'Casiguran', 'Dilasag'] },
                    { group: 'Basilan', cities: ['Isabela City', 'Lamitan City', 'Maluso'] },
                    { group: 'Bataan', cities: ['Balanga City', 'Dinalupihan', 'Orion'] },
                    { group: 'Batanes', cities: ['Basco', 'Itbayat', 'Ivana'] },
                    { group: 'Batangas', cities: ['Batangas City', 'Lipa City', 'Tanauan City'] },
                    { group: 'Benguet', cities: ['Baguio City', 'La Trinidad', 'Itogon'] },
                    { group: 'Biliran', cities: ['Naval', 'Biliran', 'Caibiran'] },
                    { group: 'Bohol', cities: ['Tagbilaran City', 'Talisay', 'Panglao'] },
                    { group: 'Bukidnon', cities: ['Malaybalay City', 'Valencia City', 'Manolo Fortich'] },
                    { group: 'Bulacan', cities: ['Malolos City', 'Meycauayan City', 'Baliuag'] },
                    { group: 'Cagayan', cities: ['Tuguegarao City', 'Aparri', 'Lal-lo'] },
                    { group: 'Camarines Norte', cities: ['Daet', 'Labo', 'Jose Panganiban'] },
                    { group: 'Camarines Sur', cities: ['Naga City', 'Iriga City', 'Libmanan'] },
                    { group: 'Camiguin', cities: ['Mambajao', 'Mahinog', 'Sagay'] },
                    { group: 'Capiz', cities: ['Roxas City', 'Panay', 'Pilar'] },
                    { group: 'Catanduanes', cities: ['Virac', 'Baras', 'Bato'] },
                    { group: 'Cavite', cities: ['Imus', 'Dasmariñas', 'Tagaytay City'] },
                    { group: 'Cebu', cities: ['Cebu City', 'Mandaue City', 'Lapu-Lapu City'] },
                    { group: 'Compostela Valley', cities: ['Nabunturan', 'Montevista', 'Mawab'] },
                    { group: 'Cotabato', cities: ['Kidapawan City', 'Midsayap', 'M/`lang'] },
                    { group: 'Davao del Norte', cities: ['Tagum City', 'Panabo City', 'Island Garden City of Samal'] },
                    { group: 'Davao del Sur', cities: ['Davao City', 'Digos City', 'Mati City'] },
                    { group: 'Davao Occidental', cities: ['Malita', 'Sarangani', 'Jose Abad Santos'] },
                    { group: 'Davao Oriental', cities: ['Mati City', 'Banaybanay', 'Governor Generoso'] },
                    { group: 'Dinagat Islands', cities: ['San Jose', 'Dinagat', 'Libjo'] },
                    { group: 'Eastern Samar', cities: ['Borongan', 'Guiuan', 'Dolores'] },
                    { group: 'Guimaras', cities: ['Jordan', 'Buenavista', 'San Lorenzo'] },
                    { group: 'Ifugao', cities: ['Lagawe', 'Kiangan', 'Lamut'] },
                    { group: 'Ilocos Norte', cities: ['Laoag', 'Batac', 'Paoay'] },
                    { group: 'Ilocos Sur', cities: ['Vigan City', 'Candon', 'Narvacan'] },
                    { group: 'Iloilo', cities: ['Iloilo City', 'Oton', 'Pavia'] },
                    { group: 'Isabela', cities: ['Ilagan City', 'Cauayan City', 'Santiago City'] },
                    { group: 'Kalinga', cities: ['Tabuk City', 'Lubuagan', 'Rizal'] },
                    { group: 'La Union', cities: ['San Fernando City', 'Agoo', 'Bauang'] },
                    { group: 'Laguna', cities: ['Santa Cruz', 'San Pedro', 'Binan'] },
                    { group: 'Lanao del Norte', cities: ['Iligan City', 'Tubod', 'Maigo'] },
                    { group: 'Lanao del Sur', cities: ['Marawi City', 'Tugaya', 'Wao'] },
                    { group: 'Leyte', cities: ['Tacloban City', 'Ormoc City', 'Baybay City'] },
                    { group: 'Maguindanao', cities: ['Cotabato City', 'Datu Odin Sinsuat', 'Sultan Kudarat'] },
                    { group: 'Marinduque', cities: ['Boac', 'Gasan', 'Mogpog'] },
                    { group: 'Masbate', cities: ['Masbate City', 'Mandaon', 'Milagros'] },
                    { group: 'Metro Manila', cities: ['Manila', 'Quezon City', 'Makati'] },
                    { group: 'Misamis Occidental', cities: ['Oroquieta City', 'Ozamiz City', 'Tangub City'] },
                    { group: 'Misamis Oriental', cities: ['Cagayan de Oro City', 'Gingoog City', 'El Salvador City'] },
                    { group: 'Mountain Province', cities: ['Bontoc', 'Barlig', 'Sadanga'] },
                    { group: 'Negros Occidental', cities: ['Bacolod City', 'Bago City', 'Talisay City','San Carlos','Sagay','La Carlota','Cadiz','Murcia','Canlaon'] },
                    { group: 'Negros Oriental', cities: ['Dumaguete City', 'Bais City', 'Guihulngan City'] },
                    { group: 'Northern Samar', cities: ['Catarman', 'Calbayog City', 'Laoang'] },
                    { group: 'Nueva Ecija', cities: ['Palayan City', 'Cabanatuan City', 'Gapan City'] },
                    { group: 'Nueva Vizcaya', cities: ['Bayombong', 'Dupax del Sur', 'Solano'] },
                    { group: 'Occidental Mindoro', cities: ['San Jose', 'Sablayan', 'Mamburao'] },
                    { group: 'Oriental Mindoro', cities: ['Calapan City', 'Bansud', 'Bongabong'] },
                    { group: 'Palawan', cities: ['Puerto Princesa City', 'Coron', 'El Nido'] },
                    { group: 'Pampanga', cities: ['San Fernando City', 'Angeles City', 'Mabalacat City'] },
                    { group: 'Pangasinan', cities: ['Lingayen', 'Dagupan City', 'San Carlos City'] },
                    { group: 'Quezon', cities: ['Lucena City', 'Tayabas City', 'Mauban'] },
                    { group: 'Quirino', cities: ['Cabarroguis', 'Diffun', 'Aglipay'] },
                    { group: 'Rizal', cities: ['Antipolo City', 'Taytay', 'Cainta'] },
                    { group: 'Romblon', cities: ['Romblon', 'Calatrava', 'San Andres'] },
                    { group: 'Samar', cities: ['Catbalogan City', 'Calbayog City', 'Basey'] },
                    { group: 'Sarangani', cities: ['Alabel', 'Glan', 'Malungon'] },
                    { group: 'Siquijor', cities: ['Larena', 'Siquijor', 'Enrique Villanueva'] },
                    { group: 'Sorsogon', cities: ['Sorsogon City', 'Bulan', 'Gubat'] },
                    { group: 'South Cotabato', cities: ['Koronadal City', 'General Santos City', 'Polomolok'] },
                    { group: 'Southern Leyte', cities: ['Maasin City', 'Bontoc', 'Malitbog'] },
                    { group: 'Sultan Kudarat', cities: ['Isulan', 'Tacurong City', 'Bagumbayan'] },
                    { group: 'Sulu', cities: ['Jolo', 'Parang', 'Indanan'] },
                    { group: 'Surigao del Norte', cities: ['Surigao City', 'Tagana-an', 'Placer'] },
                    { group: 'Surigao del Sur', cities: ['Tandag City', 'Lanuza', 'Cantilan'] },
                    { group: 'Tarlac', cities: ['Tarlac City', 'Paniqui', 'Concepcion'] },
                    { group: 'Tawi-Tawi', cities: ['Bongao', 'Panglima Sugala', 'Simunul'] },
                    { group: 'Zambales', cities: ['Olongapo City', 'Subic', 'Iba'] },
                    { group: 'Zamboanga del Norte', cities: ['Dipolog City', 'Dapitan City', 'Manukan'] },
                    { group: 'Zamboanga del Sur', cities: ['Pagadian City', 'Zamboanga City', 'Ipil'] },
                    { group: 'Zamboanga Sibugay', cities: ['Ipil', 'Dapitan City', 'Dumalinao'] },
                ];
            case 'Canada':
                return [
                    { group: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer'] },
                    { group: 'British Columbia', cities: ['Vancouver', 'Victoria', 'Surrey'] },
                    { group: 'Manitoba', cities: ['Winnipeg', 'Brandon', 'Steinbach'] },
                    { group: 'New Brunswick', cities: ['Fredericton', 'Moncton', 'Saint John'] },
                    { group: 'Newfoundland and Labrador', cities: ['St. John\'s', 'Mount Pearl', 'Corner Brook'] },
                    { group: 'Nova Scotia', cities: ['Halifax', 'Dartmouth', 'Sydney'] },
                    { group: 'Ontario', cities: ['Toronto', 'Ottawa', 'Hamilton'] },
                    { group: 'Prince Edward Island', cities: ['Charlottetown', 'Summerside', 'Stratford'] },
                    { group: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval'] },
                    { group: 'Saskatchewan', cities: ['Saskatoon', 'Regina', 'Prince Albert'] },
                ];
            case 'United States of America':
                return [
                    { group: 'Alabama', cities: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa'] },
                    { group: 'Alaska', cities: ['Anchorage', 'Fairbanks', 'Juneau', 'Sitka', 'Ketchikan'] },
                    { group: 'Arizona', cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale'] },
                    { group: 'Arkansas', cities: ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'] },
                    { group: 'California', cities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento'] },
                    { group: 'Colorado', cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood'] },
                    { group: 'Connecticut', cities: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury'] },
                    { group: 'Delaware', cities: ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Smyrna'] },
                    { group: 'Florida', cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'St. Petersburg'] },
                    { group: 'Georgia', cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon'] },
                    { group: 'Hawaii', cities: ['Honolulu', 'Hilo', 'Kailua', 'Kapolei', 'Pearl City'] },
                    { group: 'Idaho', cities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello'] },
                    { group: 'Illinois', cities: ['Chicago', 'Aurora', 'Rockford', 'Naperville', 'Joliet'] },
                    { group: 'Indiana', cities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel'] },
                    { group: 'Iowa', cities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City'] },
                    { group: 'Kansas', cities: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe'] },
                    { group: 'Kentucky', cities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington'] },
                    { group: 'Louisiana', cities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'] },
                    { group: 'Maine', cities: ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn'] },
                    { group: 'Maryland', cities: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg', 'Bowie'] },
                    { group: 'Massachusetts', cities: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge'] },
                    { group: 'Michigan', cities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor'] },
                    { group: 'Minnesota', cities: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington'] },
                    { group: 'Mississippi', cities: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'] },
                    { group: 'Missouri', cities: ['Kansas City', 'St. Louis', 'Springfield', 'Independence', 'Columbia'] },
                    { group: 'Montana', cities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte'] },
                    { group: 'Nebraska', cities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney'] },
                    { group: 'Nevada', cities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks'] },
                    { group: 'New Hampshire', cities: ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover'] },
                    { group: 'New Jersey', cities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison'] },
                    { group: 'New Mexico', cities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'] },
                    { group: 'New York', cities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'] },
                    { group: 'North Carolina', cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'] },
                    { group: 'North Dakota', cities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo'] },
                    { group: 'Ohio', cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron'] },
                    { group: 'Oklahoma', cities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton'] },
                    { group: 'Oregon', cities: ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro'] },
                    { group: 'Pennsylvania', cities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading'] },
                    { group: 'Rhode Island', cities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence'] },
                    { group: 'South Carolina', cities: ['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant', 'Rock Hill'] },
                    { group: 'South Dakota', cities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown'] },
                    { group: 'Tennessee', cities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'] },
                    { group: 'Texas', cities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth'] },
                    { group: 'Utah', cities: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem'] },
                    { group: 'Vermont', cities: ['Burlington', 'South Burlington', 'Rutland', 'Essex Junction', 'Barre'] },
                    { group: 'Virginia', cities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News'] },
                    { group: 'Washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue'] },
                    { group: 'West Virginia', cities: ['Charleston', 'Huntington', 'Parkersburg', 'Wheeling', 'Morgantown'] },
                    { group: 'Wisconsin', cities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine'] },
                    { group: 'Wyoming', cities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'] },
                ];
        }
    }
    const cityOptions = getCityOptions();
    return (
        <>
            <div className={`block ${className !== '' ? `${className}` : `w-[570px]`}`}>
                <div className="relative py-2">
                    <div className="flex items-center justify-between">
                        <label className="">{label}</label>
                        <p className={`text-red-500 ${errorText === '' ? `hidden` : ``}`}>{errorText}</p>
                    </div>
                    <div className="py-2">
                        <select
                            required={required}
                            placeholder={placeholder}
                            defaultValue={placeholder}
                            value={value}
                            className={`${!!paddingHeight ? `py-[${paddingHeight}px]` : `py-[10px]`} ${!!paddingWidth ? `py-[${paddingWidth}px]` : `px-[2px]`
                                } border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
                            onChange={onChange}
                        >
                            <option hidden selected={!!value} className="text-gray-400" value="">
                                {placeholder}
                            </option>
                            <option selected={!!value} className="text-slate-800" value="Nationwide">Nationwide</option>
                            {cityOptions?.map((group, index) => (
                                <optgroup key={index} label={group.group}>
                                    {group.cities.map((city, cityIndex) => (
                                        <option
                                            key={cityIndex}
                                            selected={value === city}
                                            value={city}
                                        >
                                            {city}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )

}