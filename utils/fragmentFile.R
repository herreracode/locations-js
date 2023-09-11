library(tools)
library(jsonlite)

#!/usr/bin/env Rscript
args = commandArgs(trailingOnly=TRUE)

#Test if all parameters are sent
if (length(args) < 3 ) {
  stop("You must supply file origin path, files destination path and number of fragments", call.=FALSE)
}

inFilePath <- args[1]
saveFilePath <- args[2]
fragments <- suppressWarnings(as.integer(args[3]))

if(is.na(fragments) || fragments < 2L ) 
{
  stop("Number of fragments should be an integer greater than 1")
}

repositoryPath <- paste(getwd(), "/", sep = "")
fileFullPath <- paste(repositoryPath, inFilePath, sep = "")
saveFullPath <- paste(repositoryPath, saveFilePath, sep = "")

if(!file.exists(fileFullPath)) 
    stop("File does not exist")
  
  if(!dir.exists(saveFullPath)) 
    stop("Path where fragments will be saved does not exist")

fragmentData <- function(filePath, saveToPath, numFragments) 
{ 
  allowedExtensions <- c("csv", "json")
  fileExtension <- file_ext(filePath)
  
  if(!(fileExtension %in% allowedExtensions)) 
    stop(paste("Just", paste(allowedExtensions, collapse=", "), "files are allowed"))

  print("Removing previous fragments...")
  
  unlink(paste(saveToPath, "*.",  fileExtension, sep = ""));
  
  print("Reading Data... (Taking the whale to kitchen)")

  data <- switch (fileExtension,
    "csv" = read.csv(filePath),
    "json" = fromJSON(filePath)
  )

  print("Starting fragmentation process... (Sushi in process)")

  numRows <- nrow(data)
  
  numGroups <- ceiling(numRows/numFragments)
  groups <- rep(1:numFragments, each=numGroups, length.out=numRows)
  
  splittedData <- split(data, groups)
  
  splittedDataJson <- lapply(splittedData, toJSON)
  
  print("Saving fragmented files... (Setting the table)")

  i <- 1
  for (json in splittedDataJson) {
    write(json, paste(saveToPath, "file-fragment-", i, ".json", sep = "") )
    i <- i+1
  }
  
  print("Done! (Bon Appetit)")
}

cat("All previous fragments will be deleted. Are you sure to continue? [Y/n]: ");
promptInput <- tolower(readLines("stdin",n=1));

if(promptInput == "y")
  fragmentData(fileFullPath, saveFullPath, fragments)
