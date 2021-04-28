class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(sentence){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for (let n = 0; n < arrayOfWords.length; n++){
      if( n == 0 ){
        // capitalize the very first word
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      }else{
        // if exceptions array includes this word (not the first word)
        if ( exceptions.includes( arrayOfWords[ n ])){
          // push that un-capitalized word into the result
          result.push( arrayOfWords[ n ] )
        }else{
          // otherwise capitalize this word and add it to result
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }
    }  
    return result.join(" ")
  }
}