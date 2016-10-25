
class UrlMappings {

	static mappings = {
        "/$controller/$id?/$action?(.$format)?"{
            constraints {
                id( matches: /\d+/ ) // id == number
            }
        }

        "/$controller/$action?(.$format)?"{
            constraints {}
        }

        "/(login)?"(controller: "login", action: "auth")
        "/app"(controller: "app", action: "index")
        "500"(view:'/error')
    }
}