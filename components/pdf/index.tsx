const getPDFHTML = (content: string) => {
  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body>
    ${content}
  </body>
</html>`;
};

export interface POHTMLProp {
  poNumber: number;
  companyName: string;
  companyAddress: string;
  vendorName: string;
  vendorAddress: string;
  itemDescription: string;
  footer: string;
}

export const getPOHTML = ({
  poNumber,
  companyName,
  companyAddress,
  vendorName,
  vendorAddress,
  itemDescription,
  footer,
}: POHTMLProp) => {
  function getFromHTML() {}

  function getCompanyHTML({
    director,
    name,
    address,
  }: {
    director: string;
    name: string;
    address: string;
  }) {
    return name && address
      ? `<div>${director}:</div>
      <div>${name}</div>
      <div>${address}</div>`
      : "";
  }
  const contentHTML = `
    <div style="margin: 50px">
        <div style="text-align: right">PO#: ${poNumber} </div>
        <div style="margin-bottom: 8px">${getCompanyHTML({
          director: "From",
          name: companyName,
          address: companyAddress,
        })}</div>
        ${getCompanyHTML({
          director: "To",
          name: vendorName,
          address: vendorAddress,
        })}
        <div style="margin: 20px 0">
            <div>Item(s):</div>
            <pre>${itemDescription}</pre>
        </div>
        <div style="font-size: small; color: gray">
            <pre>${footer}</pre>
        </div>
    </div>
  `;
  return getPDFHTML(contentHTML);
};
