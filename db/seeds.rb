
Park.create(name:"Fleming Park", address:"1901 Sunset,  Houston, TX 77005", hours:"6AM–11PM", image:"", amenities: ["tennis", "basketball", "pickleball"])
Park.create(name:"Alief Community Park", address:"11903 Bellaire Blvd, Houston, TX 77072", hours:"6AM–11PM", image:"", amenities: ["tennis", "basketball"])
Park.create(name:"Spotts Park", address:"401 S Heights Blvd, Houston, TX 77007", hours:"6AM–11PM", image:"", amenities: ["tennis", "basketball"])
Park.create(name:"Emancipation Park", address:"3018 Emancipation Ave, Houston, TX 77004", hours:"6AM–11PM", image:"", amenities: ["baseball", "tennis", "basketball"])
Park.create(name:"Memorial Park", address:"6501 Memorial Dr, Houston, TX 77007", hours:"6AM–11PM", image:"", amenities: ["tennis", "soccer", "basketball"])
Park.create(name:"Herman Brown Park", address:"400 Mercury Dr, Houston, TX 77013", hours:"8AM–9PM", image:"", amenities: ["baseball", "soccer"])
Park.create(name:"Mason Park", address:"541 S 75th St, Houston, TX 77023", hours:"8AM–10PM", image:"", amenities: ["baseball", "tennis"])
Park.create(name:"Keith-Wiess Park", address:"12300 Aldine Westfield Rd, Houston, TX 77093", hours:"", image:"", amenities: ["baseball", "soccer", "basketball", "football"])
Park.create(name:"Bear Creek Pioneers Park", address:"3535 War Memorial St, Houston, TX 77084", hours:"7AM–10PM", image:"", amenities: ["baseball", "tennis", "soccer"])
Park.create(name:"Bayland Park", address:"6400 Bissonnet St, Houston, TX 77074", hours:"7AM–10PM", image:"", amenities: ["baseball", "tennis", "soccer"])
Park.create(name:"Sunnyside Park", address:"3502 Bellfort Ave, Houston, TX 77051", hours:"10AM–5PM", image:"", amenities: ["baseball", "tennis", "soccer", "basketball"])
Park.create(name:"Stude Park", address:"Stude Park, Houston, TX 77007", hours:"24hrs", image:"", amenities: ["baseball"])
Park.create(name:"Woodland Park", address:"212 Parkview St, Houston, TX 77009", hours:"24hrs", image:"", amenities: ["tennis","basketball"])


User.create(name:"abel", email:"abel@gmail.com",password:"123")
User.create(name:"beth", email:"beth@gmail.com",password:"123")
User.create(name:"carlos", email:"carlos@gmail.com", password:"123")

Event.create(name:"Pickleball game", info:"12pm", park:Park.find_by(name:"Fleming Park"), user:User.find_by(id: 1))
Event.create(name:"Doubles Tennis Match", info:"need two for adoubles tennis match", park:Park.find_by(name:"Alief Community Park"), user:User.find_by(id: 2))
Event.create(name:"Pick up Bball game", info:"3 on 3 at 4pm", park:Park.find_by(name:"Spotts Park"), user:User.find_by(id: 3))

