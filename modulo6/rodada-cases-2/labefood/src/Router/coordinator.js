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

export const goToProfileEdit = (navigate, id) => {
    navigate(`/profile/${id}`)
}

export const goToRestaurantDetails = (navigate, restaurantId) => {
    navigate(`/feed/${restaurantId}`)
}

export const gotoSignUpAddress = (navigate) => {
    navigate("/signUp/address")
}

export const goToAddressEdit = (navigate, id) => {
    navigate(`/addressEdit/${id}`)
}

export const goToPreviousPage = (navigate) => {
    navigate(-1)
}