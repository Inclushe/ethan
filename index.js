const chalk = require('chalk')
const open = require('opn')

const links = {
  'twitter': 'https://twitter.com/inclushe',
  'codepen': 'https://codepen.io/inclushe',
  'github': 'https://github.com/Inclushe',
  'gitlab': 'https://gitlab.com/Inclushe',
  'dribbble': 'https://dribbble.com/inclushe',
  'last.fm': 'https://www.last.fm/user/inclushe',
  'keybase': 'https://keybase.io/ethanw',
  'caps-lock': 'https://capslock.inclushe.com/user/INCLUSHE',
  'email': 'mailto:inclushe@gmail.com'
}

const defaultOutput = () => {
  console.log('\033c') // Clear terminal
  console.log(`Inclushe ${chalk.blue('Ethan')}`)

  console.log(`                                   
    oCCCCCCCCCCCCCCCCCCCCCCCCCCCCC:          
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:          
  :@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@            
  o@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@O             
                
                                              
                                              
            o@@@@@@@@@@@@@@@                  
          8@@@@@@@@@@@@@@@.                  
          O@@@@@@@@@@@@@@@                    
        O@@@@@@@@@@@@@@8                     
                                              
                                              
                
    O@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@o          
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@c           
  :@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
  :CCCCCCCCCCCCCCCCCCCCCCCCCCCCCC                              
  `)

  console.log('Find me on these websites:\n')
  for (let link in links) {
    let output = ''
    output += Array(10 - link.length).join(' ') // Set width of variable names
    output += chalk.bold(link.charAt(0).toUpperCase() + link.substr(1)) // Capitalize first letter of site
    output += ': '
    output += chalk.bgBlue(` npx ethan ${link} `)
    output += ' or '
    output += chalk.underline(links[link].replace(/(mailto:)/, ''))
    console.log(output)
  }
  console.log()
}

module.exports = () => {
  if (Object.keys(links).includes(process.argv[2])) {
    open(links[process.argv[2]])
  } else {
    defaultOutput()
  }
}
