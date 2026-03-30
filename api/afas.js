export default async function handler(req, res) {
    const url = "https://85371.rest.afas.online/ProfitRestServices/connectors/YBF_SubjectFile?skip=0&take=20&orderbyfieldids=Workflow";

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Accept-Language": "nl-nl",
                "Authorization": "AfasToken PHRva2VuPjx2ZXJzaW9uPjE8L3ZlcnNpb24+PGRhdGE+MzlDMDJEQzFBNDgyNEQ1MEJCM0ZFOTRFRDEzRkM5QzM5QzlERTZFQUZEMDY0RDk2QjE3NTYyMzZEMzk3RUZBMTwvZGF0YT48L3Rva2VuPg=="
            }
        });

        const data = await response.json();
        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({ error: "AFAS API error", details: err });
    }
}
