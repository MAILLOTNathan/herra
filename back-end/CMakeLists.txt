cmake_minimum_required(VERSION 3.16)
include(FetchContent)

# Set the project name
project(back-end-herra)

# Specify the C++ standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)

FetchContent_Declare(httplib SYSTEM
    GIT_REPOSITORY https://github.com/yhirose/cpp-httplib
    GIT_TAG a609330e4c6374f741d3b369269f7848255e1954 # v0.14.1
    GIT_SHALLOW TRUE)
FetchContent_MakeAvailable(httplib)

include_directories(${httplib_SOURCE_DIR})

FetchContent_Declare(cpp-http-backend
    GIT_REPOSITORY https://github.com/etib-corp/cpp-http-backend
    GIT_TAG        0fd3198afbe631c6efe863e122d41c5eb003e338
    GIT_SHALLOW    TRUE
)
FetchContent_MakeAvailable(cpp-http-backend)

# Include directories
include_directories(include)

include_directories(${cpp-http-backend_SOURCE_DIR}/include)

# Find all source files for the server and client
file(GLOB SERVER_SOURCES "src/*.cpp" src/API/*.cpp)

# Add the server executable
add_executable(server ${SERVER_SOURCES})

# Find required packages
find_package(OpenSSL REQUIRED)
find_package(Threads REQUIRED)

# Link the cpp-http-backend library

# Link libraries for server and client
target_link_libraries(server PRIVATE OpenSSL::SSL OpenSSL::Crypto Threads::Threads etib-http-server)