
<h1 align="center"><project-name> BnBooking - Scheduling App</h1>

<p align="center"><project-description>Users can register and create one or many provider pages and set their hours of operation. Users can book appointments with the providers and review Providers. The front-end was written with Vue.js, a reactive javascript framework. The back-end is a node.js API server using the MVC pattern and mongoose to query MongoDB.</p>

# Links

- [Repo](https://github.com/patrick-misner/bnbooking1 "Repository")

- [Live (Heroku, may take some time to load)](https://bnbooking.herokuapp.com/#/ "Live View")


## Built With


- JavaScript
- Vue3
- DotNet MVC
- Node.JS
- Mongoose
- MongoDB
- HTML
- CSS

## Future Updates

- [x] Prevent double booking on front-end and back-end
- [x] Average out reviews
- [x] Implement vue3 datepicker, render hours for particular weekday selected
- [x] Edit provider details

## Authors

**Nik Lyons**

- [Profile](https://github.com/NikolasLyons "Nik Lyons")

**Jeff Watson**

- [Profile](https://github.com/JeffreyWatson "Jeff Watson")


**Conner Seely**

- [Profile](https://github.com/ConnerSeely "Conner Seely")


**Patrick Misner**

- [Profile](https://github.com/patrick-misner "Patrick Misner")
- [Email](mailto:misner.patrick@gmail.com?subject=Hi "Hi!")
- [Website](https://patrick-misner.github.io/ "Patrick Misner")

# Screenshots

## Demo

![Home Page](/bnbooking1.client/src/assets/img/bnbooking.gif)

## Home Page

![Home Page](/bnbooking1.client/src/assets/img/homepage.png)

---

## Scheduling an appointment

On the provider page, users can click Book

![](/bnbooking1.client/src/assets/img/book1.png)

Vue3 datepicker, when date is picked a function is ran for the available hours that day

![](/bnbooking1.client/src/assets/img/book2.png)

Creating an appointment at 2pm on 9/17/22

![](/bnbooking1.client/src/assets/img/book3.png)

Pop toast notification

![](/bnbooking1.client/src/assets/img/book4.png)

Function also checked if provider already has appointments that day and disabled the field.

![](/bnbooking1.client/src/assets/img/book5.png)



---

## Registering as a Provider / Editing provider

Users can set their provider availability.

![](/bnbooking1.client/src/assets/img/providerform.png)

Users can edit their provider availability.

![](/bnbooking1.client/src/assets/img/editprovider1.png)

![](/bnbooking1.client/src/assets/img/editprovider2.png)

---

## Reviews

Users can write reviews on providers they did not create. Reviews are averaged on the provider page

![](/bnbooking1.client/src/assets/img/reviews.png)

---

## My Account Page

Users can write reviews on providers they did not create. Reviews are averaged on the provider page

![](/bnbooking1.client/src/assets/img/myaccount.png)

Users can see their provider accounts, and appointments (users can have many)

![](/bnbooking1.client/src/assets/img/myaccount1.png)

