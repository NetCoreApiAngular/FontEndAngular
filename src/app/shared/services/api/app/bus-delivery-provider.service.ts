// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { ApiHelper } from 'src/app/shared/services/api-helper';
// import { ApiUrl } from '../../api-url/api-url';
// import { ApiResponse, ApiListPagingResponse, ApiListResponse } from 'src/app/shared/models/api-response/api-response';
// import { HttpClient } from '@angular/common/http';
// import { BusDeliveryProviderModel } from 'app/shared/models/bus-delivery-provider/bus-delivery-provider.model';

// export interface IBusDeliveryProviderInterface {
//   onCreateBusDeliveryProvider(busDeliveryProviderModel: BusDeliveryProviderModel): Observable<ApiResponse>;
//   onGetBusDeliveryProviderPageListing(queryParams: Object, pageNumber: number): Observable<ApiListPagingResponse>;
//   onUpdateBusDeliveryProvider(busDeliveryProviderModel: BusDeliveryProviderModel): Observable<ApiResponse>;
//   onGetBusDeliveryProviderDetail(busDeliveryProviderId: number): Promise<ApiResponse>;
//   onDeleteBusDeliveryProvider(busDeliveryProviderId: number): Observable<ApiResponse>;
//   onGetBusDeliveryProviderSelectListing(deliveryMethodId?: number): Promise<ApiListResponse>;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class BusDeliveryProviderService implements IBusDeliveryProviderInterface {
//   constructor(private http: HttpClient) {}

//   onGetBusDeliveryProviderPageListing(queryParams: Object, pageNumber: number = 1): Observable<ApiListPagingResponse> {
//     let queries = '';
//     Object.keys(queryParams).map(key => {
//       if (key && queryParams[key] && queryParams[key].toString().trim() !== '') {
//         queries += `${queries == '' ? '?' : '&'}${key}=${encodeURIComponent(queryParams[key])}`;
//       }
//     });
//     queries += `${queries == '' ? '?' : '&'}pageNumber=${pageNumber}`;
//     return this.http.get(ApiUrl.BusDeliveryProviderGetPageListing + `${queries}`).pipe(
//       map(ApiHelper.extractData),
//       catchError(ApiHelper.onFail)
//     );
//   }

//   onCreateBusDeliveryProvider(busDeliveryProviderModel: BusDeliveryProviderModel): Observable<ApiResponse> {
//     let body = JSON.stringify(busDeliveryProviderModel);
//     return this.http.post(ApiUrl.BusDeliveryProviderCreateNew, body).pipe(
//       map(ApiHelper.extractData),
//       catchError(ApiHelper.onFail)
//     );
//   }

//   onUpdateBusDeliveryProvider(busDeliveryProviderModel: BusDeliveryProviderModel): Observable<ApiResponse> {
//     let body = JSON.stringify(busDeliveryProviderModel);
//     return this.http.post(ApiUrl.BusDeliveryProviderUpdate, body).pipe(
//       map(ApiHelper.extractData),
//       catchError(ApiHelper.onFail)
//     );
//   }

//   onGetBusDeliveryProviderDetail(busDeliveryProviderId: number): Promise<ApiResponse> {
//     let queries = `?busDeliveryProviderId=${busDeliveryProviderId}`;
//     return this.http
//       .get(ApiUrl.BusDeliveryProviderDetail + '/' + busDeliveryProviderId)
//       .toPromise()
//       .then(ApiHelper.extractData)
//       .catch(ApiHelper.onFail);
//   }

//   onDeleteBusDeliveryProvider(busDeliveryProviderId: number): Observable<ApiResponse> {
//     let queries = `?busDeliveryProviderId=${busDeliveryProviderId}`;
//     return this.http.post(ApiUrl.BusDeliveryProviderDelete + queries, null).pipe(
//       map(ApiHelper.extractData),
//       catchError(ApiHelper.onFail)
//     );
//   }

//   onGetBusDeliveryProviderSelectListing(deliveryMethodId?: number): Promise<ApiListResponse> {
//     let queries = ApiUrl.BusDeliveryProviderGetSelectListing;
//     if (deliveryMethodId && !Number.isNaN(deliveryMethodId)) {
//       queries = `${ApiUrl.BusDeliveryProviderGetSelectListing}?deliveryMethodId=${deliveryMethodId}`;
//     }

//     return this.http
//       .get(queries)
//       .toPromise()
//       .then(ApiHelper.extractData)
//       .catch(ApiHelper.onFail);
//   }
// }
