app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [{ series: "Sherlock", series_img: "img/sherlock.jpg", genre: "Crime drama", season: 3, episode: "The Empty Hearse", description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", datetime: new Date(2014, 11, 31, 21, 00, 00, 00) }, 
    {series: "Robotech", series_img: "img/sherlock.jpg", genre:"Anime", season: 1, episode: "Boobytrap", description: "In 1999 a giant Alien spacecraft crash-lands on South Atalia Island. Humanity Proceeds to attempt to rebuild this marvel, but political conflicts centerend around the Macross result in a global war. After 10 years, the Unification Wars are finally over, the new Earth United Nations Govermment is in power, and work on the Macross is complete. On the day of launching ceremony, its main cannon fires on its own, destroying an alien spacecraft. This fateful they marks the beginning of the war between the humans on the Macross and Zentraedi, a race of humanoid aliens of giant proportions." , datetime: new Date(1982, 9, 3, 21, 00, 00, 00)}
                     ];
}]);