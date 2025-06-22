function Longest_Country_Name(country_names) {
    return country_names.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"])); // "United States of America"