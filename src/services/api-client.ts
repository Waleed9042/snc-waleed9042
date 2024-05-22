class AppService {
  private abortController: AbortController | null = null;
  public async request(endPoint: string, method: string): Promise<any> {
    if (this.abortController) {
      this.abortController.abort();
    }
    this.abortController = new AbortController();
    const { signal } = this.abortController;
    try {
      const response = await fetch(endPoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        signal,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log(`Request aborted: ${endPoint}`);
      } else {
        throw new Error(error.message);
      }
    } finally {
      this.abortController = null;
    }
  }
}
const appService = new AppService();

export async function fetchData(endpoint: string, method: string) {
  try {
    const data = await appService.request(endpoint, method);
    return data;
  } catch (error: any) {
    throw Error(error);
  }
}
