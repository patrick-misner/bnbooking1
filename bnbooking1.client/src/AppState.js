import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  providers: [],
  activeProvider: {},
  userAppointments: [],
  myProviderAppointments: [],

  availableTimes: [],
  myProviders: [],
  reviews: [],
  query: '',
  searchBar: false,
})
