// // Using <img /> element:

// <img
//     src={`https://flagcdn.com/${width}x${height}/${country_code}.png`}
//     srcset={`https://flagcdn.com/${width * 2}x${height * 2}/${country_code}.png 2x,
//             https://flagcdn.com/${width * 3}x${height * 3}/${country_code}.png 3x`}
//     width={width}
//     height={height}
//     alt={`${this.state.location} flag`} />

// // Using fetch:

// const flagRes = await fetch(`https://flagcdn.com/${width}x${height}/${country_code}.png`);
// const flagData = await flagRes.json();
