export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/signUp")
}

export const goToFeed = (navigate) => {
    navigate("/")
}

export const goToCart = (navigate) => {
    navigate("/cart")
}

export const goToProfile = (navigate) => {
    navigate("/profile")
}

export const goToRestaurantDetails = (navigate, restaurantId) => {
    navigate(`/feed/${restaurantId}`)
}

export const gotoSignUpAddress = (navigate) => {
    navigate("/signUp/address")
}

export const goToPreviousPage = (navigate) => {
    navigate(-1)
}