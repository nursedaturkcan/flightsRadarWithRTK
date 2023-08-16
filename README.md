# Flights Radar With ReduxToolkit

This project is a web application that displays flight data on a map and allows users to view flight details. The application is developed using React and Redux libraries. 

1. **Data Fetching and Management**:
   - Redux is used to manage flight data. A slice named `flightSlice` is created to store flight data, loading status, and error status.
   - An async thunk named `getFlights` fetches data using Axios by making an API request and saves the results to the Redux store.

2. **Map and List Views**:
   - The application offers both a map view and a list view, allowing users to switch between them.
   - The map view is created using the `react-leaflet` library. Flight data is displayed on the map as airplane icons, using customized airplane images.
   - The list view presents flights in a table format. Each flight is accompanied by a detail button.

3. **Flight Details**:
   - Flight details can be viewed by clicking on flight icons or the detail button in the list view.
   - Details are displayed using the `SideDetails` component. Data is fetched using an API request and presented as a detail page.

4. **Pagination**:
   - Pagination is employed in the list view to display a limited number of flight items per page.
   - The `react-paginate` library generates page numbers and facilitates navigation between pages.

5. **Header and Main Application Component**:
   - The `Header` component displays the application title and loading status.
   - The main `App` component manages the header, view buttons, and the map/list view.

6. **Style and Visual Design**:
   - CSS styling is applied to the application for visual enhancements.
   - Data is displayed neatly in detail popups and other components.

7. **Additional Features**:
   - Links in flight details (such as airport websites) are designed to be clickable.
   - Flight status icons are displayed with background colors corresponding to the status.

8. **Storage and Optimization**:
   - Flight data is managed in the Redux store for sharing among different components.
   - Preloading and storing data improve page transition speed.

Preview: 







https://github.com/nursedaturkcan/flightsRadarWithRTK/assets/129687664/22b420f3-1861-4ff4-8ac5-8301e398e330


















# Kütüphaneler
-react-leaflet
-leaflet
-react-redux
-@reduxjs/toolkit
-axios
-react-paginate
-thunk(Toolkit içerisinde)


# Kaynaklar

API: https://rapidapi.com/apidojo/api/flight-radar1
Sol Alt Enlem: 34.812898
Sol Alt Boylam: 27.594460
Sağ Üst Enlem: 41.582989
Sağ Üst Boylam: 44.816771


# İşlem Adımları 
-Liste Görünümü 'ListView.jsx' bileşeni oluşturmak
-Harita Görünümü 'MapView.jsx' bileşeni oluşturmak
-App.js' de bu ili görünüm arasında geçiş sağlama
-Header.jsx oluşturma
-"MapView.jsx" de harita kurulumu yapmak(leaflet)
-  Toolkit ile beraber redux kurulumu yapmak.
-Uygulama ekrana geldiği anda api'den türkiye üzerinde olan uçuş verilerini almak
-Api'den gelen cevap bir dizi olduğu için bunu objeye çevirmek
-Alınan verileri store'a aktarmak.
-Header.jsx de store'daki verileri kullanmak.
-MapView.jsx de store'daki verileri kullanmak.
-ListView.jsx de store'daki verileri kullanmak# flightsRadarWithRTK

