export const API_URL = "https://sepolia.infura.io/v3/<API-KEY>";
export const PRIVATE_KEY = "d092c12feff8140d18c609c7b7f32615bc1053a78c1f96affaae3e431fc34534";
export const contractAddress = "0xC37027d8c2DDC2281319951456dE932409A82d8";
export const contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_desc",
				"type": "string"
			}
		],
		"name": "addTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "markAsFinished",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getAllTasks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "enum TaskToDo.TaskStatus",
						"name": "status",
						"type": "uint8"
					}
				],
				"internalType": "struct TaskToDo.Task[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getTask",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "enum TaskToDo.TaskStatus",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tasks",
		"outputs": [
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "enum TaskToDo.TaskStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];