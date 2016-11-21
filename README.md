# README

My Piggy Bank is a web app designed for parents to teach their children the value of giving and the importance of financial responsibility in a fun and interactive way. The project was built using a Ruby on Rails backend and a React.js frontend, with Bootstrap for design.

<img src="http://i.imgur.com/APxh8YM.png?1"/>

My Piggy Bank is separated into two main components: the Parent, and the Child.

# Parent Component

The parent dashboard is a one-stop shop for parents to view and manage their child's activity and interactions with My Piggy Bank.

<img src="http://i.imgur.com/OP5UuLt.png"/>

* <b>Account Creation:</b>
A child cannot create an account on their own - instead, parents register with My Piggy Bank and create specific child accounts from their dashboard. Parents can set custom interest rates and special rewards tailored for their child upon individual account creation.

* <b>Sending Money:</b>
A parent may send individual children money at any time via a form on their dashboard. Currently, My Piggy Bank utilizes the idea of 'play money' for children to use, and does not require credit card information.

* <b>Managing Accounts:</b>
The parent dashboard enables parents to manage their children's accounts, including withdrawals and transfers, all in one place. A parent can see a general overview of each of their child's accounts with current undeposited funds, and can toggle more detailed information about each bank. Additionally, notifications of child activity, including requests to redeem rewards or to make transfers, are presented upon parent login. My Piggy Bank provides tools for parents to handle all of their child's requests, but also encourages discussion between parent and child.

<img src="http://i.imgur.com/pDil0RB.png"/>

# Child Component

The child dashboard aims to teach children the value of financial responsibility by engaging them with interactive options. My Piggy Bank utilizes technology such as drag and drop functionality and sounds (both a coin clink and an oink) in order to do this.

<a href="https://imgflip.com/gif/1ek68c"><img src="https://i.imgflip.com/1ek68c.gif" title="made at imgflip.com"/></a>

The dashboard allows children to create change from money sent to them from parents, and gives them the option of depositing their change into one of four banks.

<img src="http://i.imgur.com/uKyAAB2.png"/>

* <b>Investment:</b>
The investment bank is the most unique of My Piggy Banks's banks. The bank compounds interest once a week according to the interest rate set by parents. The child receives a notification upon login when the bank has compounded interest, and they can see total accumulated interest since account creation listed directly on the piggy bank. This is to encourage children to deposit their change into this bank.

* <b>Spending:</b>
This bank is used for 'immediate' spending. A child can buy a custom-made reward from their allotted list using this spending bank.

* <b>Saving:</b>
This bank is used for saving money. In order to encourage children to deposit into their saving bank, parents set unique 'save for' items - typically items such as 'bike' or 'barbie dream house' and are somewhat more expensive than a custom reward - that a child can see listed on their saving bank.

* <b>Donation:</b>
The donation bank is used to encourage children the value of sharing their wealth.

# Try It
You can try My Piggy Bank out for yourself - it is live on Heroku <a href="https://my-piggy-bank-1000.herokuapp.com/">here</a>.
