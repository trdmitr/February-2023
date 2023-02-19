import Papa from "papaparse";
export default class SheetServce {
 static fetchData = () => {
    
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRBQ847ey_0J68AbS-jSJD8LwtsxtFK3tbX5lSoNxhgqwKy6R9gz2ITVOJXzAT-IPkPoNIZBgPcrDC_/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: this.updateData,
        error: (error) => {
          console.error(error);
          this.setState(error)
        }
      }
    );
  }
}  