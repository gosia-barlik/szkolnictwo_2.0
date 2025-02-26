export function defineCancelApiObject(apiObject) {
    const cancelApiObject = {}
  
    Object.getOwnPropertyNames(apiObject).forEach((apiPropertyName) => {
        const cancellationControllerObject = {
            controller: undefined,
        }
  
        cancelApiObject[apiPropertyName] = {
            handleRequestCancellation: () => {
                if (cancellationControllerObject.controller) {
                    cancellationControllerObject.controller.abort()
                }
  
                cancellationControllerObject.controller = new AbortController()
  
                return cancellationControllerObject.controller
            },
        }
    })
  
    return cancelApiObject
  }

// TODO :: uspojnic z error handlerem w axiosConfig
export async function handleApiResponse(apiCall, fallbackValue = null) {
    try {
      const response = await apiCall();
  
      if (!response || (Array.isArray(response) && response.length === 0)) {
        console.warn("API returned an empty response.");
        return fallbackValue;
      }
  
      return response.data ?? response.data;

    } catch (error) {
      console.error("API request failed:", error);
      return fallbackValue;
    }
}