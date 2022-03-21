#  DigitalBrainApp

React Based Zen Desk App with button to Modal functionality.
This project is based off of [Zendesk-React-App-Boilerplate](https://github.com/Cloudhuset/Zendesk-React-App-Boilerplate)


## Development

Open your favorite Terminal and run these commands.

First Tab:

```sh
cd testZenApp
sudo npm run build
```

Second Tab:

```sh
cd testZenApp
zat server -p dist
```

To see the zat app add ?zat=true to the end of the URL
ex: https://digitalbrain.zendesk.com/agent/tickets/326?zat=true


## Future Goals

- Add Redux for state management
- Add Test cases for each component
- Expand modal to build out feature and separate from button
- Use a UNIX system as working on a windows system caused weirness like being unable to remove dead code


## Known issues

- Modal intantiates within the app window instead of zen desk window
- Remove bottom scroll bar


## Resources 

Through out the process I used the following resources.

| Resource |
| ------ |
| [ZenDesk Garden](https://garden.zendesk.com/components) |
| [ZenDesk Developers](https://developer.zendesk.com/api-reference) |
| [Zendesk-React-App-Boilerplate](https://github.com/Cloudhuset/Zendesk-React-App-Boilerplate) |
| [ZenDesk App Youtube](https://www.youtube.com/watch?v=zozXJ-__Ho4) |


## License

MIT
