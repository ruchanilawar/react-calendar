import dayjs from "dayjs";
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';

export const generateDate = (
	month = dayjs().month(),
	year = dayjs().year()
) => {
	const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
	const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

	const arrayOfDate = [];

	// create prefix date
	for (let i = 0; i < firstDateOfMonth.day(); i++) {
		const date = firstDateOfMonth.day(i);

		arrayOfDate.push({
			currentMonth: false,
			date,
		});
	}

	// generate current date
	for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
		arrayOfDate.push({
			currentMonth: true,
			date: firstDateOfMonth.date(i),
			today:
				firstDateOfMonth.date(i).toDate().toDateString() ===
				dayjs().toDate().toDateString(),
		});
	}

	const remaining = 42 - arrayOfDate.length;

	for (
		let i = lastDateOfMonth.date() + 1;
		i <= lastDateOfMonth.date() + remaining;
		i++
	) {
		arrayOfDate.push({
			currentMonth: false,
			date: lastDateOfMonth.date(i),
		});
	}
	return arrayOfDate;
};

export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const HolidayDates = [
    "Sat Jan 14 2023",
    "Thu Jan 26 2023",
    "Sat Jan 28 2023",
    "Sat Feb 11 2023",
    "Sat Feb 18 2023",
    "Sun Feb 19 2023",
    "Sat Feb 25 2023",
    "Wed Mar 08 2023",
    "Sat Mar 11 2023",
    "Sat Mar 25 2023",
    "Sat Apr 01 2023",
    "Tue Apr 04 2023",
    "Fri Apr 07 2023",
    "Sat Apr 08 2023",
    "Sat Apr 22 2023",
    "Mon May 01 2023",
    "Fri May 05 2023",
    "Sat May 13 2023",
    "Sat May 27 2023",
    "Sat Jun 10 2023",
    "Sat Jun 24 2023",
    "Thu Jun 29 2023",
    "Sat Jul 08 2023",
    "Sat Jul 22 2023",
    "Sat Jul 29 2023",
    "Sat Aug 12 2023",
    "Tue Aug 15 2023",
    "Wed Aug 16 2023",
    "Sat Aug 26 2023",
    "Sat Sep 09 2023",
    "Tue Sep 19 2023",
    "Sat Sep 23 2023",
    "Thu Sep 28 2023",
    "Mon Oct 02 2023",
    "Sat Oct 14 2023",
    "Tue Oct 24 2023",
    "Sat Oct 28 2023",
    "Sat Nov 11 2023",
    "Sun Nov 12 2023",
    "Sat Nov 25 2023",
    "Mon Nov 27 2023",
    "Sat Dec 09 2023",
    "Sat Dec 23 2023",
    "Mon Dec 25 2023"
]

export const HolidayList ={
    SatJan142023:"2nd Saturday Bank Holiday",
    ThuJan262023:"Republic Day",
    SatJan282023:"4th Saturday Bank Holiday",
    SatFeb112023:"2nd Saturday Bank Holiday",
    SatFeb182023:"Maha Shivratri",
    SunFeb192023:"Chhatrapati Shivaji Maharaj Jayanti",
    SatFeb252023:"4th Saturday Bank Holiday",
    WedMar082023:"Holi",
    SatMar112023:"2nd Saturday Bank Holiday",
    SatMar252023:"4th Saturday Bank Holiday",
    SatApr012023:"Yearly Closing of Bank Accounts",
    TueApr042023:"Mahavir Jayanti",
    FriApr072023:"Good Friday",
    SatApr082023:"2nd Saturday Bank Holiday",
    SatApr222023:"4th Saturday Bank Holiday/Id-ul-Fitr",
    MonMay012023:"Maharashtra Din",
    FriMay052023:"Buddha Pournima",
    SatMay132023:"2nd Saturday Bank Holiday",
    SatMay272023:"4th Saturday Bank Holiday",
    SatJun102023:"2nd Saturday Bank Holiday",
    SatJun242023:"4th Saturday Bank Holiday",
    ThuJun292023:"Id-ul-Adha",
    SatJul082023:"2nd Saturday Bank Holiday",
    SatJul222023:"4th Saturday Bank Holiday",
    SatJul292023:"Moharum",
    SatAug122023:"2nd Saturday Bank Holiday",
    TueAug152023:"Independence Day",
    WedAug162023:"Parsi New Year",
    SatAug262023:"4th Saturday Bank Holiday",
    SatSep092023:"2nd Saturday Bank Holiday",
    TueSep192023:"Ganesh Chaturthi",
    SatSep232023:"4th Saturday Bank Holiday",
    ThuSep282023:"Id-E-Milad",
    MonOct022023:"Mahatma Gandhi Jayanti",
    SatOct142023:"2nd Saturday Bank Holiday",
    TueOct242023:"Dasara",
    SatOct282023:"4th Saturday Bank Holiday",
    SatNov112023:"2nd Saturday Bank Holiday",
    SunNov122023:"Deepavali / Diwali",
    SatNov252023:"4th Saturday Bank Holiday",
    MonNov272023:"Guru Nanak Jayanti",
    SatDec092023:"2nd Saturday Bank Holiday",
    SatDec232023:"4th Saturday Bank Holiday",
    MonDec252023:"Christmas"
}

export const handleClick = (date) => {
	console.log(date);
	var addedHoliday = JSON.parse(localStorage.getItem("addedHoliday"));
    if(addedHoliday == null) addedHoliday = [];
    // Save addedHoliday back to local storage
    addedHoliday.push(date);
    localStorage.setItem("addedHoliday", JSON.stringify(addedHoliday));
	alert("Holiday Added")
}

export const displayMessage = (date) => {
	
	var addedHoliday = JSON.parse(localStorage.getItem("addedHoliday"));
    if(addedHoliday == null) addedHoliday = [];
	if(HolidayDates.includes(date.toDate().toDateString()))
		return <p className="text-gray-600">Bank Holiday - {HolidayList[date.toDate().toDateString().replaceAll(' ','')]}</p>
	if (date.toDate().toDateString().split(" ")[0] === "Sun")
		return <p className="text-gray-600">It's a Sunday Enjoyyyy!!</p>
	if(addedHoliday?.includes(date.toDate().toDateString()))
		return <p className="text-gray-600">Added holiday</p>
	else return  (<div>
		<p className="text-gray-600">Work work work work</p>
			<Button
				variant="primary"
				onClick= {()=>handleClick(date.toDate().toDateString())}
			>Add holiday</Button>
		</div>)
}
