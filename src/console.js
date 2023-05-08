const consoleEl = document.getElementById('console');
const inputEl = document.createElement('input');

// Simulate typing
function typeText(text, delay) {
    if (typeof delay === 'undefined') {
        delay = 10;
      }

  return new Promise(resolve => {
    let index = 0;
    const intervalId = setInterval(() => {
      consoleEl.lastChild.textContent += text.charAt(index);
      index++;
      if (index > text.length - 1) {
        clearInterval(intervalId);
        resolve();
      }
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }, delay);
  });
}

async function txt(text, delay) {
    consoleEl.appendChild(document.createElement('div'));
    consoleEl.lastChild.className = 'command-line';
    await typeText(text, delay);
}

// Simulate command execution
async function executeCommand(command) {

    inputEl.disabled = true;

  const commandEl = document.createElement('div');
  commandEl.className = 'command-line';
  commandEl.textContent = 'C:\\>' + command;
  consoleEl.appendChild(commandEl);

  consoleEl.appendChild(document.createElement('div'));
  
  // Execute command
  switch (command.toUpperCase().trim()) {
    case 'HELP':
      await txt('List of available commands:');
      await txt('- HELP: Display this help message');
      await txt('- INFO: Display information about this system');
      await txt('- CLEAR: Clear the command-line interface');
      consoleEl.appendChild(document.createElement('br'));
      break;
    case 'INFO':
      await txt('MANTICORE OS v5.54');
      consoleEl.appendChild(document.createElement('br'));
      break;
    case 'CLEAR':
      consoleEl.innerHTML = '';
      break;
    case 'LS':
      await txt('EMPTY');
      break;
    case 'MANTICORE':
        consoleEl.innerHTML = '';
        await txt("And lo, the great darkness descended upon the land, shrouding all in its malevolent embrace. The skies turned blood-red, and the very earth trembled beneath the feet of the faithful. For it was written in the ancient texts that in the end times, the forces of darkness would rise up to challenge the sovereignty of the divine.", 100);
        break;
    case 'ILLYA':
        await txt("Command not recognized... but that is a wonderful name");
        consoleEl.appendChild(document.createElement('br'));
        break;
    default:
      await txt('Command not recognized', 10);
      consoleEl.appendChild(document.createElement('br'));
  }

    // Remove oldest command lines if limit is exceeded
const MAX_COMMAND_LINES = 100;

    const commandLines = document.querySelectorAll('.command-line');
    if (commandLines.length > MAX_COMMAND_LINES) {
        const numToRemove = commandLines.length - MAX_COMMAND_LINES;
        for (let i = 0; i < numToRemove; i++) {
        commandLines[i].remove();
        }
    }

inputEl.disabled = false;

  consoleEl.scrollTop = consoleEl.scrollHeight;
  consoleEl.appendChild(inputEl);
  inputEl.focus();
}

// Start loading process
async function startLoading() {
  await txt('ESTABLISHED COM...', 20);
  var loginDate = 'Last login: ';
  loginDate += randomDate(new Date('1989-01-01'), new Date('2012-12-30')).toString();
  await txt(loginDate, 20);


  // Add input field for user input
  inputEl.type = 'text';
  inputEl.className = 'input-field';
  inputEl.addEventListener('keyup', async event => {
    if (event.keyCode === 13) {
      const command = inputEl.value;
      inputEl.value = '';
      await executeCommand(command);
    }
  });
  consoleEl.appendChild(document.createElement('br'));
  consoleEl.appendChild(inputEl);
  inputEl.focus();
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

startLoading();
